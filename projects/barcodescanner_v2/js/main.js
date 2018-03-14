console.log('Loading...');
ScanditSDK.configure("xxx", {
    engineLocation: "https://unpkg.com/scandit-sdk/build/"
}).then(function () {
    console.log('Loaded');
    ScanditSDK.BarcodePicker.create(document.getElementById('barcode-picker'), {
        playSoundOnScan: true,
        vibrateOnScan: true
    }).then(function (barcodePicker) {
        console.log("Ready");
        barcodePicker.applyScanSettings(new ScanditSDK.ScanSettings({
            enabledSymbologies: ["ean8", "ean13", "upca", "upce", "code128", "code39", "code93", "itf", "qr"],
            codeDuplicateFilter: 1000
        }));
        barcodePicker.onScan(function (barcodes) {
            console.log(barcodes);
        });
    });
});