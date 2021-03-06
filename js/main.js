var _lockScanning = false;

function loadTorch(){

    //Test browser support
    const SUPPORTS_MEDIA_DEVICES = 'mediaDevices' in navigator;

    if (SUPPORTS_MEDIA_DEVICES) {
        navigator.mediaDevices.getUserMedia({
            video: {
                facingMode: 'environment',
            }
        })
            .then((stream) => {
                const video = document.querySelector('video');
                video.srcObject = stream;

                // get the active track of the stream
                const track = stream.getVideoTracks()[0];

                video.addEventListener('loadedmetadata', (e) => {
                    window.setTimeout(() => (
                        onCapabilitiesReady(track.getCapabilities())
                    ), 500);
                });

                function onCapabilitiesReady(capabilities) {
                    if (capabilities.torch) {
                        //let there be light!
                        const checkbox = document.getElementById("switch-torch");
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
                    }
                    else {
                        track.stop();
                        document.getElementById("dropdownitem-torch").style.display = "none";
                    }
                }

            })
            .catch(err => console.error('getUserMedia() failed: ', err));
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
        frequency: 1,
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
        document.getElementById("switch-scanner").checked = true;

        // Set flag to is running
        //_scannerIsRunning = true;
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

        var quaggaVideo = document.getElementById("quagga-video");
        quaggaVideo.pause();

        var drawingCtx = Quagga.canvas.ctx.overlay,
            drawingCanvas = Quagga.canvas.dom.overlay;

        setTimeout(function () {
            console.log("Barcode detected and processed : [" + result.codeResult.code + "]", result);

            Quagga.pause();

            function alertMessage() {

                if(!_lockScanning){

                    _lockScanning = true;

                    if (confirm("Code gefunden: " + result.codeResult.code + "\nStimmt er mit dem Artikel überein?")) {
                        //Quagga.stop();
                        drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
                        quaggaVideo.play();
                        setTimeout(function () {
                            Quagga.start();
                            _lockScanning = false;
                        }, 3000);
                    } else {
                        //startScanner();
                        drawingCtx.clearRect(0, 0, drawingCanvas.width, drawingCanvas.height);
                        quaggaVideo.play();
                        setTimeout(function () {
                            Quagga.start();
                            _lockScanning = false;
                        }, 3000);

                    }
                    //alert("Code detected: " + result.codeResult.code + "\n Correct?");
                }
            };

            alertMessage();

        }, 500);
    });
}

const switchScanner = document.getElementById("switch-scanner");
switchScanner.addEventListener("click", function () {
    if (switchScanner.checked) {
        startScanner();
    } else {
        Quagga.stop();
        //_scannerIsRunning = false;
    }
}, false);

//torch
startScanner();
loadTorch();

// dropdown menu
document.getElementById("menu").addEventListener("click", function () {
    showMenu();
}, false);

function showMenu() {
    document.getElementById("dropdown-menu").classList.toggle("show");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {

    if (!event.target.matches('.dropdownopen')
        /*&& !event.target.matches('.dropdown-content')
        && !event.target.matches('.dropdown-item')
        && !event.target.matches('.dropdown-label')
        && !event.target.matches('.switch')*/) {

        var dropdowns = document.getElementsByClassName("dropdown-content");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
};

// TODO add service worker code here
if('serviceWorker' in navigator) {
    navigator.serviceWorker
        .register('./service-worker.js')
        .then(function () { console.log('Service Worker Registered'); });
}