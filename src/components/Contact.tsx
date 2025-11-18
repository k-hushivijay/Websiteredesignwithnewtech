import { motion } from 'motion/react';
import { Mail, Phone, ArrowRight } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useState } from 'react';
import { toast } from 'sonner@2.0.3';

export function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleGetDirections = () => {
    window.open(
      'https://www.google.com/maps/dir/?api=1&destination=ValueKare+Technologies+PVT+LTD+Malviya+National+Institute+Of+Technology+MNIT+Incubation+Center+MIIC+Start+Up+Room+No+107+Jawahar+lal+Nehru+Marg+Malviya+Nagar+Jaipur+302017',
      '_blank'
    );
  };

  return (
    <section className="py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Google Maps Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="text-3xl sm:text-4xl mb-8 text-center">Find Us</h2>
          
          {/* Map Container */}
          <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden shadow-2xl mb-6">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.1!2d75.8174!3d26.9162!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x396db5c2c0000001%3A0x1!2sValueKare%20Technologies%20PVT%20LTD%2C%20MNIT%20Incubation%20Center%20MIIC%2C%20Start%20Up%20Room%20No%20107%2C%20Jawahar%20lal%20Nehru%20Marg%2C%20Malviya%20Nagar%2C%20Jaipur%20-%20302017!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="ValueKare Technologies Location"
            ></iframe>
            
            {/* Map Overlay Label */}
            <div className="absolute top-4 left-4 bg-background shadow-lg rounded-lg px-4 py-3">
              <p className="text-sm">
                <span className="text-primary">📍</span> ValueKare Technologies Pvt Ltd - Jaipur
              </p>
            </div>
          </div>

          {/* Get Directions Button */}
          <div className="text-center">
            <Button 
              onClick={handleGetDirections}
              size="lg"
              className="shadow-lg hover:shadow-xl transition-shadow"
            >
              Get Directions
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </motion.div>

        {/* Contact Form & Info Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column - Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-1 space-y-6"
          >
            <div>
              <h3 className="text-2xl mb-6">Get in Touch</h3>
              <p className="text-muted-foreground mb-8">
                Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
              </p>
            </div>

            {/* Phone */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="text-primary" size={24} />
              </div>
              <div>
                <p className="mb-1">Phone</p>
                <a href="tel:+919314420245" className="text-primary hover:underline">
                  +91 9314420245
                </a>
              </div>
            </div>

            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="text-primary" size={24} />
              </div>
              <div>
                <p className="mb-1">Email</p>
                <a href="mailto:vikash@valuekare.in" className="text-primary hover:underline break-all">
                  vikash@valuekare.in
                </a>
              </div>
            </div>

            {/* Address */}
            <div className="pt-4">
              <p className="mb-2">Address</p>
              <p className="text-muted-foreground">
                ValueKare Technologies PVT LTD<br />
                Malviya National Institute Of Technology (MNIT)<br />
                Incubation Center MIIC<br />
                Start Up Room No 107<br />
                Jawahar lal Nehru Marg<br />
                Malviya Nagar, Jaipur - 302017
              </p>
            </div>
          </motion.div>

          {/* Right Column - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="lg:col-span-2"
          >
            <div className="bg-background rounded-2xl shadow-xl p-8 border border-border">
              <h3 className="text-2xl mb-6">Send Us a Message</h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block mb-2">Full Name</label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      className="rounded-lg"
                      required
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block mb-2">Email</label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="rounded-lg"
                      required
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="phone" className="block mb-2">Phone Number</label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+91 XXXXXXXXXX"
                      className="rounded-lg"
                    />
                  </div>
                  <div>
                    <label htmlFor="subject" className="block mb-2">Subject</label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Subject"
                      className="rounded-lg"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="message" className="block mb-2">Message</label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Your message"
                    rows={6}
                    className="rounded-lg"
                    required
                  />
                </div>

                <Button type="submit" size="lg" className="w-full md:w-auto px-12">
                  Send Message
                  <ArrowRight className="ml-2" size={20} />
                </Button>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
