const EmptyData = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full pb-20">
      <img
        src="src/assets/not-found.png"
        alt="No data"
        className="w-1/5 h-auto mb-4"
      />
      <h2 className="font-poppins text-xl font-semibold text-gray-700">Nenhum dado encontrado</h2>
      <p className="font-inter text-gray-500">Por favor, tente novamente :)</p>
    </div>
  )  
}

export default EmptyData