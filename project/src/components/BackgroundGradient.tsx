export default function BackgroundGradient() {
  return (
    <>
      <div className="fixed inset-0 bg-gradient-to-br from-black via-gray-900 to-black -z-20"></div>
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-cyan-900/20 via-transparent to-transparent -z-20"></div>
      <div className="fixed top-1/4 left-1/4 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl animate-pulse -z-20"></div>
      <div className="fixed bottom-1/4 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl animate-pulse -z-20" style={{ animationDelay: '1s' }}></div>
    </>
  );
}