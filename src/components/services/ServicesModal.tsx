import { X, Code, Database, Shield, MessageSquare, LineChart, Settings, Server, Globe, Smartphone, Cloud } from 'lucide-react';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';

interface ServicesModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const services = [
  {
    icon: Code,
    title: 'Desenvolvimento Web',
    description: 'Sites responsivos, aplicações web progressivas (PWA) e sistemas web complexos.',
    features: ['React/Next.js', 'Vue.js', 'Node.js', 'Laravel/PHP']
  },
  {
    icon: Smartphone,
    title: 'Desenvolvimento Mobile',
    description: 'Aplicativos nativos e multiplataforma para iOS e Android.',
    features: ['React Native', 'Flutter', 'iOS (Swift)', 'Android (Kotlin)']
  },
  {
    icon: Database,
    title: 'Banco de Dados',
    description: 'Modelagem, otimização e administração de bancos de dados.',
    features: ['PostgreSQL', 'MySQL', 'MongoDB', 'Redis']
  },
  {
    icon: Cloud,
    title: 'Cloud Computing',
    description: 'Soluções em nuvem escaláveis e confiáveis.',
    features: ['AWS', 'Google Cloud', 'Azure', 'DevOps']
  },
  {
    icon: Shield,
    title: 'Cibersegurança',
    description: 'Proteção contra ameaças e conformidade com normas de segurança.',
    features: ['Pentesting', 'Auditoria', 'Compliance', 'Treinamento']
  },
  {
    icon: LineChart,
    title: 'Business Intelligence',
    description: 'Análise de dados e insights para tomada de decisões.',
    features: ['Power BI', 'Tableau', 'Data Mining', 'Big Data']
  },
  {
    icon: Server,
    title: 'Infraestrutura',
    description: 'Gestão e otimização de infraestrutura de TI.',
    features: ['Virtualização', 'Containers', 'Redes', 'Backup']
  },
  {
    icon: Globe,
    title: 'E-commerce',
    description: 'Plataformas de comércio eletrônico personalizadas.',
    features: ['Shopify', 'WooCommerce', 'Magento', 'Vtex']
  },
  {
    icon: MessageSquare,
    title: 'Consultoria',
    description: 'Assessoria estratégica em transformação digital.',
    features: ['Planejamento', 'Arquitetura', 'Processos', 'Inovação']
  }
];

export function ServicesModal({ isOpen, onClose }: ServicesModalProps) {
  if (!isOpen) return null;

  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div 
      className="fixed inset-0 z-50 bg-black/50 backdrop-blur-sm overflow-y-auto"
      onClick={handleBackdropClick}
    >
      <div className="min-h-screen px-4 py-8">
        <div className="max-w-7xl mx-auto relative bg-black border border-blue-500/20 rounded-lg shadow-xl">
          <button
            onClick={onClose}
            className="absolute -top-4 -right-4 p-2 bg-black border border-blue-500/20 rounded-full text-blue-400 hover:text-blue-300 transition-colors shadow-lg hover:shadow-blue-500/20"
          >
            <X className="h-6 w-6" />
          </button>

          <div className="p-8 border-b border-blue-500/20">
            <h2 className="text-3xl font-bold text-white mb-4">Nossos Serviços</h2>
            <p className="text-blue-200 text-lg">
              Oferecemos uma ampla gama de soluções tecnológicas para impulsionar seu negócio
            </p>
          </div>

          <div className="p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <Card
                  key={index}
                  className="group bg-black/60 backdrop-blur-xl border border-blue-500/20 hover:bg-blue-900/40 transition-all duration-300"
                >
                  <div className="p-6">
                    <service.icon className="w-12 h-12 text-blue-400 mb-4" />
                    <h3 className="text-xl font-semibold mb-3 text-blue-800 group-hover:text-white transition-colors duration-300">
                      {service.title}
                    </h3>
                    <p className="text-blue-800 group-hover:text-white mb-4 transition-colors duration-300">
                      {service.description}
                    </p>
                    <div className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <div
                          key={idx}
                          className="flex items-center text-sm text-blue-800 group-hover:text-white transition-colors duration-300"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400 mr-2" />
                          {feature}
                        </div>
                      ))}
                    </div>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="p-8 border-t border-blue-500/20 bg-black/60">
            <div className="flex justify-end">
              <Button variant="outline" onClick={onClose}>
                Fechar
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}