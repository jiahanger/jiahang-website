export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-auto">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">佳杭生物</h3>
            <p className="text-sm leading-relaxed">
              专注多组学科研服务，提供基因组学、转录组学、蛋白质组学、代谢组学、风味组学等一站式解决方案。
            </p>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">快速链接</h3>
            <ul className="space-y-2 text-sm">
              <li><a href="/services" className="hover:text-white transition-colors">服务项目</a></li>
              <li><a href="/cases" className="hover:text-white transition-colors">成功案例</a></li>
              <li><a href="/cloud" className="hover:text-white transition-colors">云平台</a></li>
              <li><a href="/about" className="hover:text-white transition-colors">关于我们</a></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white text-lg font-semibold mb-4">联系我们</h3>
            <div className="space-y-2 text-sm">
              <p>📧 邮箱：jhbiotech2018@163.com</p>
              <p>💬 QQ：530773164</p>
              <p>🔬 生信平台：<a href="https://www.jiahoncloud.com" target="_blank" className="hover:text-white transition-colors">www.jiahoncloud.com</a></p>
            </div>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-6 text-center text-xs text-gray-500">
          © 2026 佳杭生物. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
