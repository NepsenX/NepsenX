// global-events.js - Data source for animations.js

const GlobalEventsDB = {
  // JANUARY
  "01-01": { type: "global", events: ["New Year's Day"], intensity: "high" },
  "01-04": { type: "global", events: ["World Braille Day"], intensity: "medium" },
  "01-24": { type: "global", events: ["International Day of Education"], intensity: "medium" },
  "01-27": { type: "global", events: ["International Holocaust Remembrance Day"], intensity: "high" },
  
  // FEBRUARY
  "02-04": { type: "global", events: ["World Cancer Day"], intensity: "high" },
  "02-11": { type: "global", events: ["International Day of Women and Girls in Science"], intensity: "medium" },
  "02-14": { type: "global", events: ["Valentine's Day"], intensity: "high" },
  "02-20": { type: "global", events: ["World Day of Social Justice"], intensity: "medium" },
  "02-21": { type: "global", events: ["International Mother Language Day"], intensity: "medium" },
  
  // MARCH
  "03-08": { type: "global", events: ["International Women's Day"], intensity: "high" },
  "03-20": { type: "global", events: ["International Day of Happiness"], intensity: "medium" },
  "03-21": { type: "global", events: ["International Day for Elimination of Racial Discrimination"], intensity: "high" },
  "03-22": { type: "global", events: ["World Water Day"], intensity: "high" },
  
  // APRIL
  "04-01": { type: "global", events: ["April Fools' Day"], intensity: "low" },
  "04-22": { type: "global", events: ["Earth Day"], intensity: "high" },
  "04-23": { type: "global", events: ["World Book Day"], intensity: "medium" },
  
  // MAY
  "05-01": { type: "global", events: ["International Workers' Day"], intensity: "high" },
  "05-05": { type: "global", events: ["Cinco de Mayo"], intensity: "medium" },
  "05-08": { type: "global", events: ["World Red Cross Day"], intensity: "medium" },
  "05-12": { type: "global", events: ["International Nurses Day"], intensity: "medium" },
  
  // JUNE
  "06-01": { type: "global", events: ["Global Day of Parents"], intensity: "medium" },
  "06-05": { type: "global", events: ["World Environment Day"], intensity: "high" },
  "06-08": { type: "global", events: ["World Oceans Day"], intensity: "high" },
  "06-14": { type: "global", events: ["World Blood Donor Day"], intensity: "medium" },
  "06-20": { type: "global", events: ["World Refugee Day"], intensity: "high" },
  "06-21": { type: "global", events: ["International Day of Yoga", "Summer Solstice"], intensity: "high" },
  
  // JULY
  "07-11": { type: "global", events: ["World Population Day"], intensity: "medium" },
  "07-18": { type: "global", events: ["Nelson Mandela International Day"], intensity: "high" },
  "07-28": { type: "global", events: ["World Hepatitis Day"], intensity: "medium" },
  "07-30": { type: "global", events: ["International Day of Friendship"], intensity: "low" },
  
  // AUGUST
  "08-09": { type: "global", events: ["International Day of Indigenous Peoples"], intensity: "high" },
  "08-12": { type: "global", events: ["International Youth Day"], intensity: "medium" },
  "08-19": { type: "global", events: ["World Humanitarian Day"], intensity: "high" },
  
  // SEPTEMBER
  "09-08": { type: "global", events: ["International Literacy Day"], intensity: "medium" },
  "09-15": { type: "global", events: ["International Day of Democracy"], intensity: "high" },
  "09-21": { type: "global", events: ["International Day of Peace"], intensity: "high" },
  "09-27": { type: "global", events: ["World Tourism Day"], intensity: "medium" },
  
  // OCTOBER
  "10-01": { type: "global", events: ["International Day of Older Persons"], intensity: "medium" },
  "10-02": { type: "global", events: ["International Day of Non-Violence"], intensity: "medium" },
  "10-05": { type: "global", events: ["World Teachers' Day"], intensity: "high" },
  "10-10": { type: "global", events: ["World Mental Health Day"], intensity: "high" },
  "10-16": { type: "global", events: ["World Food Day"], intensity: "high" },
  "10-24": { type: "global", events: ["United Nations Day"], intensity: "high" },
  "10-31": { type: "global", events: ["Halloween"], intensity: "high" },
  
  // NOVEMBER
  "11-05": { type: "global", events: ["Guy Fawkes Night"], intensity: "medium" },
  "11-14": { type: "global", events: ["World Diabetes Day"], intensity: "high" },
  "11-19": { type: "global", events: ["International Men's Day"], intensity: "medium" },
  "11-20": { type: "global", events: ["Universal Children's Day"], intensity: "high" },
  "11-25": { type: "global", events: ["International Day for Elimination of Violence against Women"], intensity: "high" },
  
  // DECEMBER
  "12-01": { type: "global", events: ["World AIDS Day"], intensity: "high" },
  "12-03": { type: "global", events: ["International Day of Persons with Disabilities"], intensity: "high" },
  "12-05": { type: "global", events: ["International Volunteer Day"], intensity: "medium" },
  "12-10": { type: "global", events: ["Human Rights Day"], intensity: "high" },
  "12-18": { type: "global", events: ["International Migrants Day"], intensity: "medium" },
  "12-25": { type: "global", events: ["Christmas Day"], intensity: "high" },
  "12-31": { type: "global", events: ["New Year's Eve"], intensity: "high" }
};

// MUSLIM EVENTS CALCULATOR (Approximate dates for current year)
const getMuslimEvents = (year = new Date().getFullYear()) => {
  // This is simplified - actual dates depend on moon sighting
  const muslimEvents = {};
  
  // Approximate calculations (should use API for accuracy)
  const ramadanStart = new Date(year, 2, 23); // Approx March 23
  const eidAlFitr = new Date(ramadanStart);
  eidAlFitr.setDate(eidAlFitr.getDate() + 29);
  
  const eidAlAdha = new Date(year, 5, 28); // Approx June 28
  const islamicNewYear = new Date(year, 6, 19); // Approx July 19
  const ashura = new Date(year, 7, 28); // Approx August 28
  const mawlid = new Date(year, 9, 19); // Approx October 19
  
  // Helper to format date key
  const formatKey = (date) => {
    const month = String(date.getMonth() + 1).padStart(2, '0');
    const day = String(date.getDate()).padStart(2, '0');
    return `${month}-${day}`;
  };
  
  // Add events
  muslimEvents[formatKey(eidAlFitr)] = { 
    type: "muslim", 
    events: ["Eid al-Fitr"], 
    intensity: "very-high" 
  };
  
  muslimEvents[formatKey(eidAlAdha)] = { 
    type: "muslim", 
    events: ["Eid al-Adha"], 
    intensity: "very-high" 
  };
  
  muslimEvents[formatKey(islamicNewYear)] = { 
    type: "muslim", 
    events: ["Islamic New Year"], 
    intensity: "high" 
  };
  
  muslimEvents[formatKey(ashura)] = { 
    type: "muslim", 
    events: ["Ashura"], 
    intensity: "high" 
  };
  
  muslimEvents[formatKey(mawlid)] = { 
    type: "muslim", 
    events: ["Prophet's Birthday (Mawlid)"], 
    intensity: "high" 
  };
  
  // Ramadan period
  for (let i = 0; i < 30; i++) {
    const ramadanDay = new Date(ramadanStart);
    ramadanDay.setDate(ramadanStart.getDate() + i);
    const key = formatKey(ramadanDay);
    if (!muslimEvents[key]) {
      muslimEvents[key] = { type: "muslim", events: ["Ramadan"], intensity: "medium" };
    }
  }
  
  return muslimEvents;
};

// COMBINE ALL EVENTS
const getAllEvents = () => {
  const muslimEvents = getMuslimEvents();
  const allEvents = { ...GlobalEventsDB };
  
  // Merge Muslim events with global events
  Object.keys(muslimEvents).forEach(date => {
    if (allEvents[date]) {
      // Combine events for same date
      allEvents[date] = {
        ...allEvents[date],
        events: [...allEvents[date].events, ...muslimEvents[date].events],
        type: "mixed"
      };
    } else {
      allEvents[date] = muslimEvents[date];
    }
  });
  
  return allEvents;
};

// EVENT INTENSITY MAP (for animation effects)
const EventIntensity = {
  "very-high": {
    animation: "fireworks",
    colors: ["#FF0000", "#FFA500", "#FFFF00"],
    duration: 2000,
    particles: 100
  },
  "high": {
    animation: "sparkle",
    colors: ["#4A90E2", "#00D4FF", "#9D4EDD"],
    duration: 1500,
    particles: 50
  },
  "medium": {
    animation: "glow",
    colors: ["#4A90E2", "#FFFFFF"],
    duration: 1000,
    particles: 25
  },
  "low": {
    animation: "pulse",
    colors: ["#4A90E2"],
    duration: 500,
    particles: 10
  }
};

// UTILITY FUNCTIONS FOR animations.js
const EventUtils = {
  // Get today's events
  getTodayEvents: () => {
    const today = new Date();
    const month = String(today.getMonth() + 1).padStart(2, '0');
    const day = String(today.getDate()).padStart(2, '0');
    const dateKey = `${month}-${day}`;
    const allEvents = getAllEvents();
    
    return allEvents[dateKey] || null;
  },
  
  // Check if today has special events
  hasSpecialEventToday: () => {
    const todayEvents = EventUtils.getTodayEvents();
    return todayEvents && ["very-high", "high"].includes(todayEvents.intensity);
  },
  
  // Get animation config for today
  getTodayAnimation: () => {
    const todayEvents = EventUtils.getTodayEvents();
    if (!todayEvents) return null;
    
    return {
      type: todayEvents.type,
      events: todayEvents.events,
      intensity: todayEvents.intensity,
      animation: EventIntensity[todayEvents.intensity]
    };
  },
  
  // Get all events for a month
  getMonthEvents: (month) => {
    const monthStr = String(month).padStart(2, '0');
    const allEvents = getAllEvents();
    const monthEvents = {};
    
    Object.keys(allEvents).forEach(date => {
      if (date.startsWith(monthStr)) {
        monthEvents[date] = allEvents[date];
      }
    });
    
    return monthEvents;
  },
  
  // Get upcoming events (next 7 days)
  getUpcomingEvents: () => {
    const upcoming = [];
    const today = new Date();
    const allEvents = getAllEvents();
    
    for (let i = 0; i < 7; i++) {
      const futureDate = new Date(today);
      futureDate.setDate(today.getDate() + i);
      
      const month = String(futureDate.getMonth() + 1).padStart(2, '0');
      const day = String(futureDate.getDate()).padStart(2, '0');
      const dateKey = `${month}-${day}`;
      
      if (allEvents[dateKey]) {
        upcoming.push({
          date: futureDate.toDateString(),
          events: allEvents[dateKey]
        });
      }
    }
    
    return upcoming;
  },
  
  // Get event animation configuration
  getEventAnimation: (eventName) => {
    const eventMap = {
      "New Year's Day": { type: "fireworks", theme: "celebration" },
      "Christmas Day": { type: "snow", theme: "winter" },
      "Eid al-Fitr": { type: "lanterns", theme: "festival" },
      "Eid al-Adha": { type: "lanterns", theme: "festival" },
      "Halloween": { type: "ghosts", theme: "spooky" },
      "Earth Day": { type: "leaves", theme: "nature" }
    };
    
    return eventMap[eventName] || { type: "sparkle", theme: "default" };
  }
};

// AUTO-INITIALIZE
if (typeof window !== 'undefined') {
  // Check today's events on load
  window.addEventListener('DOMContentLoaded', () => {
    const todayEvents = EventUtils.getTodayEvents();
    if (todayEvents) {
      console.log(`🎉 Today's Events: ${todayEvents.events.join(', ')}`);
      
      // Add special class to body if today has high-intensity events
      if (EventUtils.hasSpecialEventToday()) {
        document.body.classList.add('special-event-day');
      }
    }
  });
}

// EXPORT FOR animations.js
if (typeof module !== 'undefined' && module.exports) {
  module.exports = {
    GlobalEventsDB,
    getMuslimEvents,
    getAllEvents,
    EventIntensity,
    EventUtils
  };
}
