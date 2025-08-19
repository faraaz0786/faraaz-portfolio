import { useEffect, useState } from "react"
import { Sun, Moon } from "lucide-react"

export default function ThemeToggle() {
  const [dark, setDark] = useState(false)

  useEffect(() => {
    setDark(document.documentElement.classList.contains('dark'))
  }, [])

  const toggle = () => {
    const next = !dark
    setDark(next)
    document.documentElement.classList.toggle('dark', next)
    localStorage.setItem('theme', next ? 'dark' : 'light')
  }

  return (
    <button onClick={toggle} className="p-2 rounded-xl border border-slate-200 dark:border-slate-800 hover:bg-slate-100 dark:hover:bg-slate-800" aria-label="Toggle theme">
      {dark ? <Sun size={18}/> : <Moon size={18}/>}
    </button>
  )
}
