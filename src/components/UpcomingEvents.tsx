
import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, MapPin, Camera, Clock } from 'lucide-react';

const UpcomingEvents = () => {
  const events = [

  ];

  const getStatusColor = (status: string) => {
    return status === 'Confirmed' ? 'text-green-400' : 'text-yellow-400';
  };

  const getTypeIcon = (type: string) => {
    return <Camera className="w-5 h-5" />;
  };

  return (
    <section className="py-24 px-6 bg-black">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-5xl md:text-6xl font-thin mb-6 text-white">
            Upcoming <span className="text-gradient">Events</span>
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-light">
            See where we'll be capturing magical moments next. Join our journey of creating timeless memories.
          </p>
        </div>

        <div className="space-y-8">
          {events.map((event, index) => (
            <Card
              key={event.id}
              className="bg-gradient-to-r from-gray-900/50 to-black border-gray-800 hover:border-primary/30 transition-all duration-300 overflow-hidden group"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="p-0">
                <div className="flex flex-col lg:flex-row">
                  {/* Image */}
                  <div className="lg:w-1/3 relative overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-64 lg:h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getStatusColor(event.status)} bg-black/50`}>
                        {event.status}
                      </span>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="lg:w-2/3 p-8 flex flex-col justify-center">
                    <div className="flex items-center mb-4">
                      <div className="bg-primary/10 p-3 rounded-full mr-4">
                        {getTypeIcon(event.type)}
                      </div>
                      <span className="text-primary font-medium">{event.type}</span>
                    </div>

                    <h3 className="text-2xl lg:text-3xl font-semibold text-white mb-4">
                      {event.title}
                    </h3>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-white/70">
                      <div className="flex items-center">
                        <Calendar className="w-5 h-5 mr-3 text-primary" />
                        <span>{event.date}</span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="w-5 h-5 mr-3 text-primary" />
                        <span>{event.time}</span>
                      </div>
                      <div className="flex items-center">
                        <MapPin className="w-5 h-5 mr-3 text-primary" />
                        <span>{event.location}</span>
                      </div>
                    </div>

                    {event.status === 'Open' && (
                      <div className="mt-6">
                        <p className="text-white/60 text-sm mb-3">
                          Slots available for this date and location
                        </p>
                        <button
                          onClick={() => {
                            const message = encodeURIComponent(
                              `Hi MahaCaptures, I'm interested in booking a session on ${event.date} in ${event.location}. Please share availability and packages.`
                            );
                           window.open(`https://wa.me/+919585966522?text=${message}`, '_blank');
                          }}
                          className="bg-primary hover:bg-primary/90 text-white px-6 py-2 rounded-full text-sm font-medium transition-all duration-300 hover:scale-105"
                        >
                          Book This Slot
                        </button>
                      </div>
                    )}
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default UpcomingEvents;
