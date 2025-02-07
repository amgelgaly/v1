import { motion } from 'framer-motion';
import { User2, Star, Users, Eye, ListChecks, ChevronDown, Zap, Filter, Share2, MoreVertical } from 'lucide-react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
}

const PageHeader = ({ title, subtitle }: PageHeaderProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="bg-gradient-to-b from-primary/5 to-transparent"
    >
      {/* removed component */}
       {/* Title and Subtitle */}
       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 text-center">
        <motion.h1
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
          className="text-2xl font-bold text-gray-900 mb-2"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="text-lg text-gray-600 max-w-3xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </motion.div>
  );
};

export default PageHeader;
