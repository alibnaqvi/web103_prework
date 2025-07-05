// Script to add sample creators to your Supabase database
// Run this in your browser console on your app page, or use it as a reference

const sampleCreators = [
    {
        name: "Mark Rober",
        url: "https://www.youtube.com/@MarkRober",
        description: "Former NASA engineer who creates amazing science and engineering videos. Known for his elaborate pranks and educational content.",
        imageURL: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=300&fit=crop"
    },
    {
        name: "MrBeast",
        url: "https://www.youtube.com/@MrBeast",
        description: "Philanthropist and content creator known for giving away millions of dollars and creating viral challenges.",
        imageURL: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=400&h=300&fit=crop"
    },
    {
        name: "PewDiePie",
        url: "https://www.youtube.com/@PewDiePie",
        description: "Swedish YouTuber known for his gaming content, commentary videos, and being one of the most subscribed channels.",
        imageURL: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    },
    {
        name: "Dream",
        url: "https://www.youtube.com/@Dream",
        description: "Minecraft YouTuber and speedrunner known for his Manhunt series and Minecraft challenges.",
        imageURL: "https://images.unsplash.com/photo-1542751371-adc38448a05e?w=400&h=300&fit=crop"
    },
    {
        name: "Ninja",
        url: "https://www.youtube.com/@Ninja",
        description: "Professional gamer and streamer known for Fortnite gameplay and being one of the most popular streamers.",
        imageURL: "https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=300&fit=crop"
    }
];

// To use this script:
// 1. Open your app in the browser
// 2. Open browser console (F12)
// 3. Copy and paste this script
// 4. Run: addSampleCreators();

async function addSampleCreators() {
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2');
    
    const supabase = createClient(
        'https://enijxqzmvchweaeojhsn.supabase.co',
        'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImVuaWp4cXptdmNod2VhZW9qaHNuIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTAwMjI0MjgsImV4cCI6MjA2NTU5ODQyOH0.-vZ2kRVVN527ojn_A2f0zUQcsBhnDdFuwvlVryPYsX0'
    );

    for (const creator of sampleCreators) {
        const { data, error } = await supabase
            .from('creators')
            .insert([creator])
            .select();
        
        if (error) {
            console.error('Error adding creator:', creator.name, error);
        } else {
            console.log('Successfully added:', creator.name);
        }
    }
    
    console.log('Sample creators added! Refresh your page to see them.');
}

// Alternative: You can manually add these creators through your app's "Add Creator" form
console.log('Sample creators data:', sampleCreators); 