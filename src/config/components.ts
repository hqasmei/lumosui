import EventCard from '@/components/cards/event-card';
import GlassCard from '@/components/cards/glass-card';
import ImageCard from '@/components/cards/image-card';
import PricingCard from '@/components/cards/pricing-card';
import ProfileCard from '@/components/cards/profile-card';
import BasicHeroSection from '@/components/heros/basic-hero-section';
import AdvancedSearchBar from '@/components/search-bars/advanced-search-bar';
import BasicSearchBar from '@/components/search-bars/basic-search-bar';

export interface ComponentConfig {
  Component: React.ComponentType<any>;
  props: {
    [key: string]: any;
  };
}

export const cardComponents: ComponentConfig[] = [
  {
    Component: GlassCard,
    props: {
      title: 'Glass Card',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Learn more',
    },
  },
  {
    Component: ImageCard,
    props: {
      imageSrc:
        'https://images.unsplash.com/photo-1721390336122-c883e2b5c113?q=80&w=2787&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      topText: 'New York',
      bottomSubText: 'Venues',
      bottomMainText: 'Contra Studios',
    },
  },
  {
    Component: ProfileCard,
    props: {
      name: 'John Doe',
      role: 'Software Engineer',
      avatarUrl: 'https://randomuser.me/api/portraits/men/1.jpg',
      bio: 'Passionate about creating intuitive user interfaces and solving complex problems.',
    },
  },
  {
    Component: EventCard,
    props: {
      title: 'Tech Conference 2024',
      date: 'August 15-17, 2024',
      location: 'San Francisco, CA',
      description: 'Join us for the biggest tech event of the year!',
      imageUrl:
        'https://images.unsplash.com/photo-1540575467063-178a50c2df87?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80',
    },
  },
  {
    Component: PricingCard,
    props: {
      planName: 'Pro',
      price: '$49',
      period: 'per month',
      features: ['Feature 1', 'Feature 2', 'Feature 3'],
      ctaText: 'Get Started',
    },
  },
];

export const searchBars: ComponentConfig[] = [
  {
    Component: BasicSearchBar,
    props: {
      placeholder: 'Search for a venue',
    },
  },
  {
    Component: AdvancedSearchBar,
    props: {
      placeholder: 'Search events',
      filters: ['Date', 'Location', 'Category'],
    },
  },
];

export const heroComponents: ComponentConfig[] = [
  {
    Component: BasicHeroSection,
    props: {
      title: 'Hero',
      subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
      buttonText: 'Learn more',
    },
  },
];

export const components = [
  {
    title: 'Cards',
    path: '/cards',
    items: cardComponents,
  },
  {
    title: 'Search Bars',
    path: '/search-bars',
    items: searchBars,
  },
  {
    title: 'Hero Sections',
    path: '/hero-sections',
    items: heroComponents,
  },
];