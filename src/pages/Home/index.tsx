import { motion } from "framer-motion"
import Button from "../../components/Button"
import { useNavigate } from "react-router-dom"

const HomePage = () => {
  const navigate = useNavigate()
  return (
    <main className="homeee h-full bg-[#1a202c] text-gray-300 flex flex-col items-center justify-center px-6 py-12">
      <section className="max-w-3xl text-center space-y-6">
        <motion.h1
          className="font-inter text-4xl md:text-5xl font-bold"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Organize seu conteúdo de forma visual e intuitiva
        </motion.h1>

        <motion.p
          className="font-poppins text-lg text-gray-400"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <strong>Optiboard</strong> é uma ferramenta simples para planejar suas postagens.
        </motion.p>

        <motion.p
          className="font-inter text-sm text-gray-500"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.4 }}>
          Hoje, você organiza <span className="text-blue-400">📂</span> <br/> 
          Amanhã você colabora, agenda e publica <span className="text-purple-400">🔮</span>
        </motion.p>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4, delay: 0.6 }}
        >
          <Button onClick={() => navigate('/dashboard')}>Ir para Dashboard</Button>
        </motion.div>
      </section>
    </main>
  )
}

export default HomePage
