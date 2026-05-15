export interface BlogPost {
  slug: string;
  tag: string;
  title: string;
  desc: string;
  date: string;
  readTime: string;
  content: string;
}

export const blogData: BlogPost[] = [
  {
    slug: "how-to-build-macro-plan-moroccan",
    tag: "Nutrition",
    title: "How to Build a Macro Plan for a Moroccan Client in 10 Minutes",
    desc: "A step-by-step guide using local foods like harira, tagine, and kefta to hit your client's precise macro targets.",
    date: "May 10, 2026",
    readTime: "5 min read",
    content: `
Building a nutrition plan that your clients will actually follow means giving them the foods they love. For Moroccan clients, a generic chicken-and-rice plan simply won't work long-term. You need to incorporate local staples like harira, tagine, and mint tea into their macros.

### Step 1: Understand the Staples

Moroccan cuisine is rich in complex carbohydrates and healthy fats, but can sometimes be lower in lean protein. Key staples include:

- **Couscous & Bread (Khobz)**: Primary carb sources. Be mindful of portion sizes.
- **Olive Oil & Argan Oil**: Incredible sources of healthy fats, but calorie-dense.
- **Legumes**: Chickpeas and lentils (often in Harira) provide both carbs and plant-based protein.

### Step 2: The 80/20 Rule for Moroccan Diets

Allow 80% of their diet to be structured, macro-friendly meals (like grilled kefta, chicken skewers, or fish tagine with extra veggies), and leave 20% for cultural staples. For example, a small piece of traditional bread with olive oil in the morning.

### Step 3: Using the CoachFlow Nutrition Engine

With CoachFlow, we've built a localized database containing verified macro profiles for over 500 Moroccan dishes. 

1. Select your client's profile.
2. Search for "Chicken Tagine (Less Oil)".
3. Add it to their lunch schedule. The system automatically calculates the protein, carbs, and fats.

By building plans that respect your client's culture, you'll see a massive increase in adherence and retention.
    `
  },
  {
    slug: "scaling-10-to-50-clients",
    tag: "Business",
    title: "From 10 to 50 Clients: The Systems That Make It Possible",
    desc: "What changes when you scale? The exact workflows, tools, and automations that let top coaches serve more without burning out.",
    date: "May 3, 2026",
    readTime: "8 min read",
    content: `
Every coach hits a ceiling. Usually, it happens around 15-20 clients. At this point, you're spending more time answering WhatsApp messages and tracking down payments than you are actually coaching.

If you want to scale to 50 clients and beyond, you cannot rely on sheer willpower. You need systems.

### 1. Centralize Communication

Stop using personal messaging apps for business. When a client texts you at 11 PM on a Sunday, it ruins your recovery. Use a dedicated coaching platform with a built-in messaging portal. Set strict office hours and let the system handle automated check-in reminders.

### 2. Automate the Mundane

- **Payments**: Move clients to automatic subscriptions. No more "Hey, just a reminder that your invoice is due."
- **Onboarding**: Create an automated welcome sequence that collects their initial data, signs waivers, and delivers their first week's plan without you lifting a finger.

### 3. Template Your Genius

You shouldn't be writing every program from scratch. Build 5-10 core templates for different avatars (e.g., "Busy Professional Fat Loss," "Hypertrophy 4-Day Split"). When a new client joins, apply the template and customize the remaining 20% based on their specific needs.

Scaling isn't about working harder; it's about building an infrastructure that supports growth.
    `
  },
  {
    slug: "whatsapp-killing-coaching-business",
    tag: "Technology",
    title: "Why WhatsApp is Killing Your Coaching Business (And What to Do)",
    desc: "The hidden cost of managing your coaching business through chat apps — and how professional tools change everything.",
    date: "Apr 28, 2026",
    readTime: "6 min read",
    content: `
It usually starts innocently. You get your first client, and it's just easier to text them their workouts on WhatsApp. But fast forward six months, and your phone is a war zone of voice notes, missing payment screenshots, and lost workout history.

### The Problem with Chat-Based Coaching

1. **No Data Continuity**: When a client asks, "What did I lift on squats three weeks ago?", you have to scroll through hundreds of messages to find it.
2. **Blurred Boundaries**: Your clients have direct access to the same app you use to talk to your family. This inevitably leads to burnout.
3. **Lack of Professionalism**: Asking for a 1,000 MAD payment via a WhatsApp text doesn't command the same authority as an automated, branded invoice.

### The Transition to Professional Software

Moving clients off WhatsApp and onto a dedicated app like CoachFlow elevates your brand immediately. It tells your clients: "I run a serious business."

**How to make the switch:**
- Announce the transition as an "upgrade" to their service.
- Give them a 2-week grace period.
- After the grace period, gently redirect all WhatsApp queries: "Great question! Please drop that in your CoachFlow portal so I can review it alongside your data."

Protect your time, protect your peace, and professionalize your practice.
    `
  }
];
