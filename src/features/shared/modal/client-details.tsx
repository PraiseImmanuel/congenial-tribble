import { sendPdf } from "@/lib/services/request";
import { useFlutterwave, closePaymentModal } from "flutterwave-react-v3";
import React, { useState } from "react";
import Notifications from "./notification";
import { toast } from "react-toastify";

interface IProps {
  setModalOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const ClientDetails: React.FC<IProps> = ({ setModalOpen }) => {
  const [formField, setFormField] = useState({
    name: "",
    email: "",
    phone_number: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [isPaying, setIsPaying] = useState(true);
  const [isSending, setIsSending] = useState(false);
  const config = {
    public_key: "FLWPUBK_TEST-b42d5f80706c9e8c07131ef0a470ab61-X",
    tx_ref: Date.now().toString(),
    amount: 2200,
    currency: "NGN",
    payment_options: "card,mobilemoney,ussd",
    customer: {
      email: formField.email,
      phone_number: formField.phone_number,
      name: formField.name,
    },
    customizations: {
      title: "Williams Obaedo",
      description: "Payment for Ebook",
      logo: "https://st2.depositphotos.com/4403291/7418/v/450/depositphotos_74189661-stock-illustration-online-shop-log.jpg",
    },
  };

  // useFlutterwave();
  const handleFlutterPayment = useFlutterwave(config);

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event?.preventDefault();
    setIsLoading((prevIsLoading) => (prevIsLoading = true));
    if (navigator.onLine) {
      try {
        handleFlutterPayment({
          callback: (response) => {
            console.log(response);
            if (response.status === "completed") {
              closePaymentModal();
              setIsPaying((prevIsSending) => false);
              setIsSending((prevIsSending) => true);
              sendPdf({ email: formField.email }).then((res) => {
                console.log(res);
                if (res?.success) {
                  setIsSending((prevIsSending) => (prevIsSending = false));
                }
              });
            } else {
              toast.error("Wrong Credentials. Please try again.", {
                toastId: "1",
              });
            }
          },
          onClose: () => {},
        });
      } catch (error) {
        // Handle payment failure
        console.error("Payment failed:", error);
      }
    } else {
      // Offline: Show notification
      setIsLoading((prevIsLoading) => (prevIsLoading = false));
      toast.error(
        "Network disconnected. Please check your internet connection."
      );
    }
  };

  return (
    <div className="w-full flex justify-center">
      {isPaying && (
        <div
          className="flex min-h-full flex-col justify-center
    px-6 pb-12 pt-6 lg:px-8 bg-white w-[90%] max-w-[425px] rounded-[16px]"
        >
          <div className="flex flex-col">
            <button
              className="self-end mb-6"
              onClick={() => setModalOpen(false)}
              type="button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 384 512"
                fill="#333"
                height={18}
                width={18}
              >
                <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z" />
              </svg>
            </button>
          </div>

          <div className="sm:mx-auto sm:w-full sm:max-w-sm">
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Full Name
                </label>
                <div className="mt-2">
                  <input
                    id="name"
                    name="name"
                    type="text"
                    placeholder="John Doe"
                    value={formField.name}
                    onChange={(e) =>
                      setFormField({ ...formField, name: e.target.value })
                    }
                    required
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo/10 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Email address
                </label>
                <div className="mt-2">
                  <input
                    id="email"
                    name="email"
                    type="email"
                    placeholder="john@gmail.com"
                    value={formField.email}
                    onChange={(e) =>
                      setFormField({ ...formField, email: e.target.value })
                    }
                    required
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo/10 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="phone_number"
                  className="block text-sm font-medium leading-6 text-gray-900"
                >
                  Phone Number
                </label>
                <div className="mt-2">
                  <input
                    id="phone_number"
                    name="phone_number"
                    type="text"
                    placeholder="081-------------"
                    value={formField.phone_number}
                    onChange={(e) =>
                      setFormField({
                        ...formField,
                        phone_number: e.target.value,
                      })
                    }
                    required
                    className="block w-full rounded-md border-0 py-2 px-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-1 focus:ring-inset focus:ring-indigo/10 sm:text-sm sm:leading-6"
                  />
                </div>
              </div>

              <p className="text-red-400 text-xs text-center">
                Please note that you will receive the book through email. Make
                sure you enter the correct details.
              </p>

              <div className="mt-2">
                <button
                  type="submit"
                  disabled={isLoading}
                  className="flex w-full justify-center bg-primary px-3 py-1.5 text-sm max-w-[300px] mx-auto
              font-semibold leading-6 text-white shadow-sm hover:bg-primary/80 outline-none rounded-full"
                >
                  {isLoading ? "Processing..." : "Proceed"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {!isPaying && (
        <Notifications isSending={isSending} setModalOpen={setModalOpen} />
      )}
    </div>
  );
};

export default ClientDetails;
