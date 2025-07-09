export default function FooterLine() {
  return (
    <footer className=" text-center py-10 px-4">
      <div className="max-w-4xl mx-auto space-y-2">
        {/* Thin separator */}
        <div className="h-px bg-gradient-to-r from-transparent via-purple-700 to-transparent mb-6 w-full" />

        {/* Text Content */}
        <p className="text-sm md:text-base">
          Creating collaborative environments for the next generation of entrepreneurs
        </p>
        <p className="text-sm md:text-base font-semibold text-purple-400">
          E-Cell IIT Hyderabad
        </p>
      </div>
    </footer>
  );
}
