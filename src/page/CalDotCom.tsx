import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const CalDotCom = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({ namespace: "20min" });
      cal("ui", { hideEventTypeDetails: false, layout: "month_view" });
    })();
  }, []);

  return (
    <section className="flex flex-col gap-4 w-full py-10">
      <Cal
        namespace="20min"
        calLink="codefirst/20min"
        style={{ width: "100%", height: "100%", overflow: "scroll" }}
        config={{ layout: "month_view" }}
      />
    </section>
  );
};

export default CalDotCom;
