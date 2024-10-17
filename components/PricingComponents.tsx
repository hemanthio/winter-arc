import { Sparkles, Box, Circle, FileText, Maximize2, CheckCircle } from "lucide-react"

export default function PricingComponents() {
  return (
    <div className="flex flex-col  max-w-4xl mx-auto my-14 md:flex-row gap-6 p-6 font-sfpro">
      <div className="w-full md:w-1/2 bg-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-2 text-gray-500 mb-2">
          <Sparkles size={20} />
          <span className="text-sm">Demo</span>
        </div>
        <h2 className="text-xl font-normal mb-6">Try Bloom for free to test it in work</h2>
        <h3 className="text-5xl font-bold mb-6">Free</h3>
        <ul className="space-y-3 mb-6">
          <FeatureItem icon={Circle} text="Gradient" value="10" />
          <FeatureItem icon={Circle} text="Black" value="10" />
          <FeatureItem icon={Circle} text="Clay" value="10" />
          <FeatureItem icon={FileText} text="Sources" value="PNG" />
          <FeatureItem icon={Maximize2} text="Resolution" value="1200x1200px" />
          <FeatureItem icon={CheckCircle} text="License" value="Personal" />
        </ul>
        <button className="w-full py-3 bg-gray-300 text-black rounded-full font-medium hover:bg-gray-200 transition-colors">
          Download
        </button>
      </div>

      <div className="w-full md:w-1/2 bg-black text-white rounded-3xl p-6 shadow-lg">
        <div className="flex items-center gap-2 text-gray-400 mb-2">
          <Box size={20} />
          <span className="text-sm">Full pack</span>
        </div>
        <h2 className="text-xl font-normal mb-6">Get a stunning pack of trendy 3D shapes</h2>
        <h3 className="text-5xl font-bold mb-6">$38</h3>
        <ul className="space-y-3 mb-6">
          <FeatureItem icon={Circle} text="Gradient" value="150+" />
          <FeatureItem icon={Circle} text="Black" value="150+" />
          <FeatureItem icon={Circle} text="Clay" value="150+" />
          <FeatureItem icon={FileText} text="Sources" value="PNG, Figma, Blender" />
          <FeatureItem icon={Maximize2} text="Resolution" value="2400x2400px" />
          <FeatureItem icon={CheckCircle} text="License" value="Commercial" />
        </ul>
        <button className="w-full py-3 bg-white text-black rounded-full font-medium hover:bg-gray-100 transition-colors">
          Purchase
        </button>
      </div>
    </div>
  )
}

function FeatureItem({ icon: Icon, text, value }) {
  return (
    <li className="flex items-center justify-between">
      <div className="flex items-center gap-2">
        <Icon size={16} className="text-gray-400" />
        <span>{text}</span>
      </div>
      <span>{value}</span>
    </li>
  )
}