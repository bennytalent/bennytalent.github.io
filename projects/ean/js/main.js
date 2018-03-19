var _scannerIsRunning = false;
var _lockScanning = false;

function turnOnTorch() {
    //Test browser support
    const SUPPORTS_MEDIA_DEVICES = 'mediaDevices' in navigator;

    if (SUPPORTS_MEDIA_DEVICES) {
        //Get the environment camera (usually the second one)
        navigator.mediaDevices.enumerateDevices().then(devices => {

            const cameras = devices.filter((device) => device.kind === 'videoinput');

        if (cameras.length === 0) {
            throw 'No camera found on this device.';
        }
        const camera = cameras[cameras.length - 1];

        // Create stream and get video track
        navigator.mediaDevices.getUserMedia({
            video: {
                deviceId: camera.deviceId,
                facingMode: ['user', 'environment'],
                height: {ideal: 1080},
                width: {ideal: 1920}
            }
        }).then(stream => {
            const track = stream.getVideoTracks()[0];

        //Create image capture object and get camera capabilities
        const imageCapture = new ImageCapture(track)
        const photoCapabilities = imageCapture.getPhotoCapabilities().then(() => {

            //todo: check if camera has a torch

            //let there be light!
            const checkbox = document.getElementById("checkbox_torch");
            checkbox.addEventListener("click", function () {
                if (checkbox.checked) {
                    track.applyConstraints({
                        advanced: [{torch: true}]
                    });
                } else {
                    track.applyConstraints({
                        advanced: [{torch: false}]
                    });
                }
            }, false);

            const btn = document.querySelector('.switch');
        btn.addEventListener('click', function(){
            track.applyConstraints({
                advanced: [{torch: true}]
            });
        });
    });
    });
    });

        //The light will be on as long the track exists


    }
}

function startScanner() {
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: document.querySelector('#scanner-container'),
            constraints: {
                width: 1280,
                height: 720,
                facingMode: "environment"
            },
        },
        decoder: {
            readers: [
                //"code_128_reader",
                "ean_reader",
                "ean_8_reader"
                //"code_39_reader",
                //"code_39_vin_reader",
                //"codabar_reader",
                //"upc_reader",
                //"upc_e_reader",
                //"i2of5_reader",
                //"2of5_reader",
                //"code_93_reader"
            ],
            debug: {
                showCanvas: true,
                showPatches: true,
                showFoundPatches: true,
                showSkeleton: true,
                showLabels: true,
                showPatchLabels: true,
                showRemainingPatchLabels: true,
                boxFromPatches: {
                    showTransformed: true,
                    showTransformedBox: true,
                    showBB: true
                }
            }
        },

    }, function (err) {
        if (err) {
            console.log(err);
            return
        }

        console.log("Initialization finished. Ready to start");
        Quagga.start();

        // Set flag to is running
        _scannerIsRunning = true;
    });

    Quagga.onProcessed(function (result) {
        var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

        if (result) {
            if (result.boxes) {
                drawingCtx.clearRect(0, 0, parseInt(drawingCanvas.getAttribute("width")), parseInt(drawingCanvas.getAttribute("height")));
                result.boxes.filter(function (box) {
                    return box !== result.box;
                }).forEach(function (box) {
                    Quagga.ImageDebug.drawPath(box, { x: 0, y: 1 }, drawingCtx, { color: "green", lineWidth: 2 });
                });
            }

            if (result.box) {
                Quagga.ImageDebug.drawPath(result.box, { x: 0, y: 1 }, drawingCtx, { color: "#00F", lineWidth: 2 });
            }

            if (result.codeResult && result.codeResult.code) {
                Quagga.ImageDebug.drawPath(result.line, { x: 'x', y: 'y' }, drawingCtx, { color: 'red', lineWidth: 3 });
            }

        }
    });


    Quagga.onDetected(function (result) {
        console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);

        function alertMessage() {
            if (confirm("Code detected: " + result.codeResult.code + "\nCorrect?")) {
                Quagga.stop();
                _lockScanning = true;
            } else {
                startScanner();
                _lockScanning = true;
            }
            //alert("Code detected: " + result.codeResult.code + "\n Correct?");
        };

        if(!_lockScanning){
            alertMessage();
        }

    });
}


// Start/stop scanner
document.getElementById("btn").addEventListener("click", function () {
    if (_scannerIsRunning) {
        Quagga.stop();
        _scannerIsRunning = false;
    } else {
        startScanner();
    }
}, false);

// TODO add service worker code here
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () { console.log('Service Worker Registered'); });
}

//torch
turnOnTorch();