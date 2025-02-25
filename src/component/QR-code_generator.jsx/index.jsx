import { useState } from "react";
import QRCode from "react-qr-code";
import { toPng } from "html-to-image";

export default function QrCode() {
  const [input, setInput] = useState("");
  const [qrcode, setQrcode] = useState("");

  function qrcodegenerator() {
    setQrcode(input);
    setInput("");
  }
{/*add exter functionality to download QR*/}
  function downloadQRCode() {
    const qrElement = document.getElementById("qr-code-value");

    if (!qrElement) return;

    toPng(qrElement)
      .then((dataUrl) => {
        const link = document.createElement("a");
        link.href = dataUrl;
        link.download = "qrcode.png";
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      })
      .catch((err) => console.error("Error generating QR Code image:", err));
  }

  return (
    <>
      <div>
        <label>Enter your Value here</label>
        <div>
          <input
            type="text"
            onChange={(e) => setInput(e.target.value)}
            value={input}
            placeholder="Enter your value here"
          />
        </div>
        <button disabled={input.trim() === ""} onClick={qrcodegenerator}>
          Generate
        </button>
      </div>

      <div>
        {qrcode && (
          <>
            <QRCode id="qr-code-value" value={qrcode} size={200} bgColor="#fff" />
            <br />
            <button onClick={downloadQRCode}>Download</button>
          </>
        )}
      </div>
    </>
  );
}
