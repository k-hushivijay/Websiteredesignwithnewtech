import { motion } from 'motion/react';

export function Clients() {
  return (
    <section id="clients" className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-4">
            Value To Client
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            We pride ourselves on delivering exceptional value to our clients through our comprehensive services and dedicated approach.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-primary/5 rounded-2xl p-8 md:p-12 text-center"
        >
          <p className="text-muted-foreground text-lg mb-6">
            Our commitment is to provide outstanding service delivery that exceeds expectations. We work closely with each client to understand their unique needs and deliver tailored solutions that drive real business value.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
            <div>
              <div className="text-3xl mb-2">100+</div>
              <p className="text-muted-foreground">Projects Completed</p>
            </div>
            <div>
              <div className="text-3xl mb-2">50+</div>
              <p className="text-muted-foreground">Happy Clients</p>
            </div>
            <div>
              <div className="text-3xl mb-2">15+</div>
              <p className="text-muted-foreground">Years Experience</p>
            </div>
            <div>
              <div className="text-3xl mb-2">24/7</div>
              <p className="text-muted-foreground">Support</p>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
