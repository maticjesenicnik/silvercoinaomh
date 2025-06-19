interface TeamHelperProps {
  name: string
  role: string
}

export const TeamHelper = ({ name, role }: TeamHelperProps) => {
  return (
    <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-colors">
      <h4 className="font-semibold text-white mb-1">{name}</h4>
      <p className="text-sm text-gray-300">{role}</p>
    </div>
  )
}