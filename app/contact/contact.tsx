import ContactAgentForm from "../contactAgentForm/ContactAgentForm";
import {
  HiLocationMarker,
  HiOutlinePhoneOutgoing,
  HiOutlineMail,
  HiClock,
} from "react-icons/hi";

export default function Contact() {
  return (
    <div className="container mx-auto">
      <div className="grid grid-cols-2 gap-4">
        <div className="mt-10 mb-10">
          <h1 className="text-2xl font-bold"> Contact Info</h1>
          <div className="mt-5">
            <hr />
          </div>
          <div className="mt-5">
            <p>
              Etiam id finibus justo, ultrices hendrerit arcu. Mauris hendrerit
              mollis suscipit. Maecenas vel ante finibus, varius dolor
              consectetur, semper augue.
            </p>
          </div>
          <div className="mt-10 mb-10">
            <h1 className="text-2xl font-bold"> Contact Us</h1>
            <div className="mt-5">
              <hr />
            </div>
            <div className="mt-5">
              <p className="inline-flex items-baseline">
                <HiLocationMarker style={{ "padding-top": "2px" }} />
                &nbsp; 3015 Grand Ave, Coconut Grove,Merrick Way, FL 12345
              </p>

              <p>
                <span className="inline-flex items-baseline">
                  <HiOutlinePhoneOutgoing style={{ "padding-top": "2px" }} />
                  &nbsp;123-456-789-000
                  <br />
                  123-456-789-000
                </span>
              </p>
              <p>
                <span className="inline-flex items-baseline">
                  <HiOutlineMail style={{ "padding-top": "2px" }} />
                  &nbsp;Info@yoursite.com <br />
                  Support@yoursite.com
                </span>
              </p>
              <p>
                <span className="inline-flex items-baseline">
                  <HiClock style={{ "padding-top": "2px" }} />
                  &nbsp;Mon – Sat: 8:00 AM – 18:00 PM <br />
                  Sun : Closed
                </span>
              </p>
            </div>
          </div>
        </div>
        <div>
          <ContactAgentForm />
        </div>
      </div>
    </div>
  );
}
