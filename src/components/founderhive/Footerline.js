// export default function FooterLine() {
//   return (
//     <footer className=" text-center py-10 px-4">
//       <div className="max-w-4xl mx-auto space-y-2">
//         {/* Thin separator */}
//         <div className="h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent mb-6 w-full" />

//         {/* Text Content */}
//         <p className="text-sm md:text-base">
//           Creating collaborative environments for the next generation of entrepreneurs
//         </p>
//         <p className="text-sm md:text-base font-semibold text-purple-400">
//           E-Cell IIT Hyderabad
//         </p>
//       </div>
//     </footer>
//   );
// }
export default function FooterLine() {
  return (
    // <footer className="text-center py-10 px-4 font-outfit relative">
    //   <div className="max-w-4xl mx-auto space-y-6">

    //     {/* Thin glowing line */}
    //     {/* <div className="relative mx-auto w-8 h-0.5 bg-purple-500 rounded-full ">
    //       <div className="absolute inset-0 w-full h-full bg-purple-500 rounded-full blur-md opacity-60" />
    //     </div> */}

    //     <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>

    //     {/* Tagline */}
    //     <p className="text-base md:text-lg text-gray-300 font-normal leading-relaxed">
    //       Creating collaborative environments for the next generation of entrepreneurs
    //     </p>

    //     {/* Footer name */}
    //     <p className="text-base md:text-lg font-semibold text-purple-400">
    //       E-Cell IIT Hyderabad
    //     </p>
    //   </div>
    // </footer>
    <footer className="py-12 px-6 border-t border-purple-500/20">
          <div className="max-w-6xl mx-auto text-center">
            <div className="mb-6">
              <div className="w-16 h-1 bg-gradient-to-r from-transparent via-purple-500 to-transparent mx-auto mb-6"></div>
              <p className="text-gray-400 mb-4">
                Creating collaborative environments for the next generation of entrepreneurs
              </p>
              <p className="text-purple-300 font-semibold">E-Cell IIT Hyderabad</p>
            </div>
          </div>
        </footer>
  );
}
