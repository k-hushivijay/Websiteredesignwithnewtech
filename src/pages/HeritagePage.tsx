import { BookOpen, Heart, Camera, Archive, Users, Award, FileText, Star } from 'lucide-react';
import { Card } from '../components/ui/card';
import { Button } from '../components/ui/button';

interface HeritagePageProps {
  onNavigate?: (page: string) => void;
}

export function HeritagePage({ onNavigate }: HeritagePageProps) {
  const initiatives = [
    {
      icon: <Heart className="w-8 h-8 text-primary" />,
      title: "Vision Care for Children",
      description: "Free eye checkups and spectacles for underprivileged children in collaboration with schools and NGOs"
    },
    {
      icon: <Archive className="w-8 h-8 text-primary" />,
      title: "Healthcare Record Digitization",
      description: "Preserving historical medical records and transforming them into accessible digital formats"
    },
    {
      icon: <BookOpen className="w-8 h-8 text-primary" />,
      title: "Medical Heritage Documentation",
      description: "Documenting and preserving traditional healthcare practices and medical knowledge"
    },
    {
      icon: <Camera className="w-8 h-8 text-primary" />,
      title: "Visual Documentation",
      description: "High-quality digitization of historical medical documents, photographs, and artifacts"
    },
    {
      icon: <Users className="w-8 h-8 text-primary" />,
      title: "Community Health Programs",
      description: "Awareness campaigns and health camps in rural and underserved areas"
    },
    {
      icon: <Award className="w-8 h-8 text-primary" />,
      title: "Healthcare Excellence",
      description: "Supporting healthcare institutions in maintaining their legacy while adopting modern practices"
    }
  ];

  const impact = [
    {
      number: "5000+",
      label: "Children Screened",
      description: "Free eye checkups conducted"
    },
    {
      number: "1000+",
      label: "Spectacles Distributed",
      description: "To underprivileged students"
    },
    {
      number: "50+",
      label: "Partner Institutions",
      description: "Schools and NGOs collaborated"
    },
    {
      number: "100K+",
      label: "Records Digitized",
      description: "Historical healthcare documents"
    }
  ];

  const programs = [
    {
      title: "School Vision Program",
      description: "Comprehensive eye screening camps in schools",
      features: [
        "Free comprehensive eye examination",
        "Prescription and consultation",
        "Free spectacles for needy children",
        "Follow-up care and support",
        "Parent counseling sessions"
      ]
    },
    {
      title: "Digital Heritage Initiative",
      description: "Preserving healthcare heritage for future generations",
      features: [
        "Document scanning and digitization",
        "Metadata creation and indexing",
        "Cloud-based secure storage",
        "Search and retrieval systems",
        "Long-term preservation planning"
      ]
    },
    {
      title: "Community Outreach",
      description: "Healthcare awareness and preventive care programs",
      features: [
        "Health awareness campaigns",
        "Free health checkup camps",
        "Preventive care education",
        "Sanitation and hygiene programs",
        "Nutrition counseling"
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-primary/10 via-accent to-secondary py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-primary rounded-full mb-6">
              <BookOpen className="w-10 h-10 text-white" />
            </div>
            <h1 className="mb-6">Heritage & CSR Initiatives</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Committed to giving back to society through healthcare CSR initiatives and preserving 
              medical heritage for future generations. Making a difference in children's lives and 
              protecting healthcare history.
            </p>
            <div className="flex gap-4 justify-center">
              <Button size="lg" onClick={() => onNavigate?.('contact')}>Partner With Us</Button>
              <Button size="lg" variant="outline" onClick={() => onNavigate?.('contact')}>
                Learn More
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Initiatives Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our CSR & Heritage Initiatives</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Combining social responsibility with heritage preservation for a better tomorrow
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {initiatives.map((initiative, index) => (
              <Card key={index} className="p-6 hover:shadow-lg transition-shadow">
                <div className="mb-4">{initiative.icon}</div>
                <h3 className="mb-2">{initiative.title}</h3>
                <p className="text-muted-foreground">{initiative.description}</p>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="py-20 bg-primary text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4 text-white">Our Impact</h2>
            <p className="text-white/90 max-w-2xl mx-auto">
              Making a measurable difference in communities and healthcare preservation
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {impact.map((item, index) => (
              <div key={index} className="text-center">
                <div className="text-5xl mb-3">{item.number}</div>
                <h3 className="mb-2 text-white">{item.label}</h3>
                <p className="text-white/80">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs Section */}
      <section className="py-20 bg-accent/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="mb-4">Our Programs</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Structured initiatives designed to create lasting social impact
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {programs.map((program, index) => (
              <Card key={index} className="p-8">
                <h3 className="mb-3 text-primary">{program.title}</h3>
                <p className="text-muted-foreground mb-6">{program.description}</p>
                <ul className="space-y-3">
                  {program.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <div className="flex-shrink-0 w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center mr-3 mt-0.5">
                        <svg className="w-3 h-3 text-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                      </div>
                      <span className="text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Care Section */}
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Heart className="w-5 h-5 text-primary mr-2" />
                <span className="text-primary">CSR Initiative</span>
              </div>
              <h2 className="mb-6">Children's Vision Care Program</h2>
              <p className="text-muted-foreground mb-6">
                Our flagship CSR initiative focuses on providing free eye care to underprivileged children. 
                We believe every child deserves clear vision to learn, grow, and achieve their dreams.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4>Free Eye Checkups</h4>
                    <p className="text-muted-foreground">Comprehensive eye examinations by qualified optometrists</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4>Free Spectacles</h4>
                    <p className="text-muted-foreground">Quality eyewear provided at no cost to needy children</p>
                  </div>
                </li>
                <li className="flex items-start">
                  <Star className="w-6 h-6 text-primary mr-3 mt-0.5 flex-shrink-0" />
                  <div>
                    <h4>School Partnerships</h4>
                    <p className="text-muted-foreground">Collaborating with schools to reach maximum children</p>
                  </div>
                </li>
              </ul>
              <Button size="lg" onClick={() => onNavigate?.('contact')}>
                Partner With Our CSR Program
              </Button>
            </div>

            <div className="bg-white rounded-lg p-8 shadow-lg">
              <h3 className="mb-6">How It Works</h3>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    1
                  </div>
                  <div>
                    <h4>School Partnership</h4>
                    <p className="text-muted-foreground">We partner with schools to organize vision screening camps</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    2
                  </div>
                  <div>
                    <h4>Screening Camp</h4>
                    <p className="text-muted-foreground">Our team conducts comprehensive eye examinations</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    3
                  </div>
                  <div>
                    <h4>Prescription & Distribution</h4>
                    <p className="text-muted-foreground">Children receive prescriptions and quality spectacles</p>
                  </div>
                </div>
                <div className="flex">
                  <div className="flex-shrink-0 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-white mr-4">
                    4
                  </div>
                  <div>
                    <h4>Follow-up Care</h4>
                    <p className="text-muted-foreground">Ongoing support and periodic checkups for children</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="mb-6 text-white">Join Us in Making a Difference</h2>
          <p className="text-xl mb-8 text-white/90">
            Partner with us in our CSR initiatives or heritage preservation programs. Together, we can 
            create a lasting impact on society and preserve healthcare history for future generations.
          </p>
          <div className="flex gap-4 justify-center">
            <Button 
              size="lg" 
              variant="secondary"
              onClick={() => onNavigate?.('contact')}
            >
              Become a Partner
            </Button>
            <Button 
              size="lg" 
              className="bg-white text-primary hover:bg-white/90"
              onClick={() => onNavigate?.('contact')}
            >
              Contact Us
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
