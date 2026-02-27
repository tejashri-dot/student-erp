// import InnerPageHeader from "../Components/InnerPageHeader";

// function FeeStructure() {
//   return (
//     <>
//       <InnerPageHeader
//         title="Fee Structure"
//         breadcrumb={[
//           { label: "Admission", link: "/admission/procedure" },
//           { label: "Fee Structure" },
//         ]}
//       />

//       <div className="container" style={{ padding: "60px 0" }}>
//         <h2>Fee Structure</h2>
//         <p>
//           Our fee structure is transparent and designed to be affordable.
//         </p>
//       </div>
//     </>
//   );
// }

// export default FeeStructure;





import InnerPageHeader from "../Components/InnerPageHeader";

function FeeStructure() {
  const feeData = [
    { className: "Nursery", admission: 5000, tuition: 12000 },
    { className: "KG", admission: 6000, tuition: 15000 },
    { className: "Class 1 - 5", admission: 8000, tuition: 22000 },
    { className: "Class 6 - 8", admission: 10000, tuition: 28000 },
    { className: "Class 9 - 10", admission: 12000, tuition: 35000 },
  ];

  return (
    <>
      <InnerPageHeader
        title="Fee Structure"
        breadcrumb={[
          { label: "Admission", link: "/admission/procedure" },
          { label: "Fee Structure" },
        ]}
      />

      {/* OUTER SAFE AREA */}
      <section className="bg-gradient-to-b from-blue-50 to-white py-16 px-4 sm:px-6 lg:px-8">
        {/* CENTERED CONTAINER */}
        <div className="mx-auto w-full max-w-5xl">
          {/* HEADER */}
          <div className="mb-10 text-center">
            <h2 className="text-3xl font-bold text-gray-800">
              Academic Fee Structure
            </h2>
            <p className="mt-2 text-gray-600 max-w-2xl mx-auto">
              Transparent, affordable, and clearly structured fees for each
              academic level.
            </p>
          </div>

          {/* CARD GRID */}
          <div className="grid gap-6 sm:grid-cols-2">
            {feeData.map((fee, index) => {
              const total = fee.admission + fee.tuition;

              return (
                <div
                  key={index}
                  className="w-full rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-lg transition"
                >
                  {/* CARD HEADER */}
                  <div className="rounded-t-2xl bg-blue-600 px-6 py-4 text-white">
                    <h3 className="text-lg font-semibold">
                      {fee.className}
                    </h3>
                  </div>

                  {/* CARD BODY */}
                  <div className="px-6 py-6 space-y-4">
                    <div className="flex justify-between text-gray-700">
                      <span>Admission Fee</span>
                      <span className="font-medium">
                        ₹ {fee.admission.toLocaleString()}
                      </span>
                    </div>

                    <div className="flex justify-between text-gray-700">
                      <span>Tuition Fee / Year</span>
                      <span className="font-medium">
                        ₹ {fee.tuition.toLocaleString()}
                      </span>
                    </div>

                    <hr className="border-gray-200" />

                    <div className="flex justify-between text-lg font-bold text-gray-900">
                      <span>Total</span>
                      <span className="text-blue-600">
                        ₹ {total.toLocaleString()}
                      </span>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* NOTES */}
          <div className="mt-12 rounded-xl bg-blue-50 border border-blue-200 p-6">
            <h4 className="mb-3 text-lg font-semibold text-blue-800">
              Important Information
            </h4>
            <ul className="list-disc pl-5 space-y-1 text-sm text-blue-700">
              <li>Fees are payable annually.</li>
              <li>Admission fees are non-refundable.</li>
              <li>Books, uniforms & transport are charged separately.</li>
              <li>Late payment may attract additional charges.</li>
            </ul>
          </div>

          {/* CTA */}
          <div className="mt-12 text-center">
            <a
              href="/admission/form"
              className="inline-flex items-center justify-center rounded-xl bg-blue-600 px-10 py-4 text-white font-semibold shadow-lg hover:bg-blue-700 transition focus:outline-none focus:ring-4 focus:ring-blue-300"
            >
              Apply for Admission
            </a>
          </div>
        </div>
      </section>
    </>
  );
}

export default FeeStructure;                                                                                                                                      