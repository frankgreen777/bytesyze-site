import { Hero, ServicesGrid, WhyByteSyze, CallToAction } from '../components';
import { motion } from 'framer-motion';
import { Card, Button } from 'your-ui-library';
import { someLucideReactIcons } from 'lucide-react';

const HomePage = () => {
  return (
    <div className="container mx-auto p-4">
      <Hero />
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.5 }}>
        <ServicesGrid services={[
          { title: 'Service 1', icon: someLucideReactIcons.icon1 },
          { title: 'Service 2', icon: someLucideReactIcons.icon2 },
          { title: 'Service 3', icon: someLucideReactIcons.icon3 },
          { title: 'Service 4', icon: someLucideReactIcons.icon4 },
          { title: 'Service 5', icon: someLucideReactIcons.icon5 },
        ]} />
      </motion.div>
      <WhyByteSyze />
      <CallToAction>
        <Card>
          <Button>Get Started</Button>
        </Card>
      </CallToAction>
    </div>
  );
};

export default HomePage;