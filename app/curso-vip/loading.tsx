export default function Loading() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black">
      <div className="flex flex-col items-center">
        <div className="animate-spin rounded-full h-32 w-32 border-t-2 border-b-2 border-green-400"></div>
        <h2 className="text-xl font-semibold text-white mt-4">Carregando...</h2>
      </div>
    </div>
  )
}
