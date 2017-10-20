console.log("Render Worker Started");

self.onmessage = function (message) {
  var data = message.data.data;
  var pdf = message.data.pdf;

  if (pdf) {
    pdf.htmlToPDF({
      data: data,
      documentSize: "A4",
      landscape: "portrait",
      type: "base64"
    }, function (data) {
      self.postMessage(data);
    }, function (error) {
      self.postMessage(error);
    });
  }
}
