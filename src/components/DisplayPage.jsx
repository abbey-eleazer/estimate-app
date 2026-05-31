import Logo from "../assets/logo.jpeg";
import Phone from "../assets/phone.png";
import Whatsapp from "../assets/whatsapp.png";

const DisplayPage = () => {
  return (
    <>
      <div id="display" className="container mx-auto max-md p-4 ">
        <header>
          <div className="flex items-center">
            <img src={Logo} alt="logo" className="logo " />
            <h1 className="font-bold text-xl">
              Gams & Lams
              <br /> Painting and Decorating
            </h1>
          </div>
          <div className="flex items-center justify-center gap-4 font-medium text-lg -mt-8">
            <div className="flex items-center gap-2">
              <img src={Phone} alt="phone-icon" className="icon" />
              <p>0543559583 </p>
            </div>
            <div className="flex items-center gap-2">
              <img src={Whatsapp} alt="Whatsapp-icon" className="icon" />
              <p>0276264706 </p>
            </div>
          </div>
          <section>
            <h2 className="heading_secondary py-4">ESTIMATE / INVOICE</h2>
          </section>
        </header>
        <main>
          <section>
            <div className="flex items-center justify-between font-medium ">
              <p>Name: Marco shipping company </p>
              <p>
                {new Date().toLocaleDateString("en-GB", {
                  day: "numeric",
                  month: "long",
                  year: "numeric",
                })}
              </p>
            </div>
            <div className="flex items-center justify-between gap-2 font-medium ">
              <p>Location: Dansoman</p>
              <p>Contact: 0532888135</p>
            </div>
            <div className="text-center font-medium py-2">
              <p>Painting of 2 Bedroom house</p>
            </div>
          </section>
          <section>
            <div>
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="border p-2">Qty</th>
                    <th className="border p-2">Item Description</th>
                    <th className="border p-2">Unit Price</th>
                    <th className="border p-2">Amount</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="border p-1">1pcs</td>
                    <td className="border p-1">Marble sheet stickers</td>
                    <td className="border p-1 text-right">50000.00ghc</td>
                    <td className="border p-1 text-right">11.00ghc</td>
                  </tr>
                  <tr>
                    <td className="border p-1">1pcs</td>
                    <td className="border p-1">Marble sheet</td>
                    <td className="border p-1 text-right">5.00ghc</td>
                    <td className="border p-1 text-right">1.00ghc</td>
                  </tr>
                  <tr>
                    <td className="border p-1">1pcs</td>
                    <td className="border p-1">Marble sheet</td>
                    <td className="border p-1 text-right">5.00ghc</td>
                    <td className="border p-1 text-right">1.00ghc</td>
                  </tr>
                  <tr>
                    <td className="border p-1">1pcs</td>
                    <td className="border p-1">Marble sheet</td>
                    <td className="border p-1 text-right">5.00ghc</td>
                    <td className="border p-1 text-right">1.00ghc</td>
                  </tr>
                  <tr>
                    <td className="border p-1">1pcs</td>
                    <td className="border p-1">Marble sheet</td>
                    <td className="border p-1 text-right">5.00ghc</td>
                    <td className="border p-1 text-right">1.00ghc</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>
          <section>
            <div className="w-2/3 ml-auto mt-4">
              <p className="flex items-center justify-between font-medium">
                Sub-Total: <span className="text-right">25,000.00ghc</span>
              </p>
              <p className="flex items-center justify-between font-medium">
                Transportation: <span className="text-right">25,000.00ghc</span>
              </p>
              <p className="flex items-center justify-between font-medium">
                Workmanship: <span className="text-right">25,000.00ghc</span>
              </p>
              <p className="flex items-center justify-between font-medium">
                Grand-Total: <span className="text-right">25,000.00ghc</span>
              </p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default DisplayPage;
