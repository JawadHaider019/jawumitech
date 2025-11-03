export function AnimatedDivider() {
  return (
    <div className="relative h-20 flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#ADF802]/50 to-transparent" />
      </div>
      <div className="relative z-10 px-4 bg-black">
        <div className="w-2 h-2 bg-[#ADF802] rounded-full animate-pulse" />
      </div>
    </div>
  )
}
