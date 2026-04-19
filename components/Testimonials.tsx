// 16 best descriptive 5★ reviews from Airbnb guests
const ALL = [
  { name: 'Kiela Camille', location: 'Batangas, PH', avatar: 'https://a0.muscache.com/im/pictures/user/f2e3bc49-b05a-4249-a5f7-15463c507ddb.jpg?aki_policy=profile_x_medium', text: 'The place was absolutely beautiful — the moment I walked in, it smelled so fresh and inviting. The unit was spotless. Definitely booking again, this place is now at the top of my list!' },
  { name: 'Cale Belyn', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/e67a4640-e89d-482c-834a-dc5f31a3678a.jpg?aki_policy=profile_x_medium', text: 'Best Airbnb we\'ve stayed at in the metro ✨. Felt right at home — ambiance and complete amenities made our whole stay so comfortable. Shaun and Maverick are wonderful hosts. 10/10 would recommend.' },
  { name: 'Ron Maverick', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/78a589a8-b4ba-4ee7-b096-89b04fefd58b.jpg?aki_policy=profile_x_medium', text: 'By far the best host and unit we\'ve stayed in on our month-long trip in the Philippines. Very responsive and accommodating. Would definitely recommend for anyone — without a doubt.' },
  { name: 'Teresa', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/User/original/b4f49e4d-e33d-4a63-95ae-8ce4df528210.jpeg?aki_policy=profile_x_medium', text: 'By far one of our favorite stays! The unit is beautifully aesthetic, cozy and thoughtfully designed. Made our time in BGC even more enjoyable.' },
  { name: 'Phil', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/d4fedefe-0533-4912-92f4-d576fb496568.jpg?aki_policy=profile_x_medium', text: 'Fantastic stay! The place was spotless, comfortable, and in a great location. Excellent amenities including a washing machine and powerful AC. Highly recommended!' },
  { name: 'Andrew', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/8ceaf9d7-f9d4-4d9a-8873-478ec32231a0.jpg?aki_policy=profile_x_medium', text: 'My go-to host and stay when I\'m in Manila. The unit is spectacular and the location is prime. Added to my rotation of favourite places — highly recommended!' },
  { name: 'Madeline Cara', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/User/original/ee4d43ea-f1f3-4096-ae05-c8fe886f7645.jpeg?aki_policy=profile_x_medium', text: 'Sir Shaun made sure I was comfortable throughout my stay. The unit has a clean, minimalist aesthetic that instantly made me feel at ease. Loved every bit of it.' },
  { name: 'Johanna', location: 'Parañaque, PH', avatar: 'https://a0.muscache.com/im/pictures/user/b9584775-baef-43a2-9ce6-c5b845f7e6ae.jpg?aki_policy=profile_x_medium', text: 'Shaun and Maverick are great hosts! Very friendly and quick to respond. The place is quiet and clean. We will consider booking again :)' },
  { name: 'Gilbert', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/f46ceca5-c148-4ec6-bed6-5fab54635ee8.jpg?aki_policy=profile_x_medium', text: 'Shaun\'s place is centrally located and easy to get around BGC. So many shops and eateries nearby. Despite a last-minute booking, Shaun was highly accommodating.' },
  { name: 'Reinier', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/User/original/4330560a-7c28-401d-b240-d0da28195911.jpeg?aki_policy=profile_x_medium', text: 'Loved my stay here. Steps away from Uptown Mall and Mitsukoshi Mall. Looks exactly like the photos. WiFi speeds are fast, perfect for remote workers!' },
  { name: 'Hannah', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/c3005df2-50df-4acb-8a2d-f841248faa03.jpg?aki_policy=profile_x_medium', text: 'Squeaky clean and very comfortable. Incredibly understanding and kind hosts. Appliances and utensils were easy to use. Would absolutely stay again.' },
  { name: 'Harliquine', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/User/original/8a6fd795-c294-47cc-adb2-1f3d5b3e8f8e.jpeg?aki_policy=profile_x_medium', text: 'Amazing location, very accessible to everything. The place is also very clean and spacious. Definitely gonna rebook if I\'m going on a holiday in Manila!' },
  { name: 'Irra Joy Santos', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/User/original/c84957d9-6447-4ea6-8b67-9f5a08f6b366.jpeg?aki_policy=profile_x_medium', text: 'Super convenient location. Very accessible and easy to walk around, with lots of nearby places. Shaun is very responsive and easy to communicate with. 10/10 💯' },
  { name: 'Tessie', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/User/original/ce8947ef-cf5d-4af2-984c-e899471ef964.jpeg?aki_policy=profile_x_medium', text: 'My husband and I really enjoyed our stay. Shaun provides a clean, comfortable and calming space that felt like home away from home. Would definitely rebook!' },
  { name: 'Winie', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/aae427d5-64b0-410a-9a0f-6a364770bd63.jpg?aki_policy=profile_x_medium', text: 'Great stay! The place was neat and cozy. Love that it\'s close to all the places I wanted to try. Shaun was accommodating and easy to communicate with.' },
  { name: 'Kino', location: 'Philippines', avatar: 'https://a0.muscache.com/im/pictures/user/fdd14a56-d6ec-4c79-9d1a-618e8ede776b.jpg?aki_policy=profile_x_medium', text: 'The host is very responsive and easy to communicate with. The unit is really nice — very aesthetic and neat. Perfect for couples or family.' },
];

// Split 8 per row, offset row 2 for variety
const ROW1 = [...ALL.slice(0, 8), ...ALL.slice(0, 8)];
const ROW2 = [...ALL.slice(8, 16), ...ALL.slice(8, 16)];

function Stars() {
  return (
    <div className="flex gap-0.5">
      {[...Array(5)].map((_, i) => (
        <svg key={i} className="w-2.5 h-2.5 text-brand-gold fill-current" viewBox="0 0 20 20">
          <path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z" />
        </svg>
      ))}
    </div>
  );
}

function Card({ r }: { r: typeof ALL[0] }) {
  return (
    <div className="w-52 shrink-0 bg-white rounded-xl shadow-sm px-3.5 py-3 flex flex-col border border-gray-100">
      <div className="flex items-center gap-2 mb-2">
        <img
          src={r.avatar}
          alt={r.name}
          className="w-6 h-6 rounded-full object-cover shrink-0 bg-gray-100"
          loading="lazy"
          onError={(e) => { (e.target as HTMLImageElement).src = '/logo.svg'; }}
        />
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold text-gray-900 leading-tight truncate">{r.name}</p>
          <Stars />
        </div>
        <span className="text-xl leading-none text-brand-green/20 font-serif select-none">&ldquo;</span>
      </div>
      <p className="text-gray-500 text-[11px] leading-relaxed flex-1 line-clamp-3">{r.text}</p>
      <p className="text-[9px] text-gray-300 mt-1.5">{r.location} · Airbnb ★5.0</p>
    </div>
  );
}

export default function Testimonials() {
  return (
    <section className="py-12 bg-brand-cream overflow-hidden">
      <div className="text-center mb-8 px-4">
        <p className="text-brand-gold font-bold tracking-widest text-xs uppercase mb-2">Guest Reviews</p>
        <h2 className="section-title">What Our Guests Say</h2>
        <p className="text-gray-400 text-sm">Verified 5★ reviews from Airbnb</p>
      </div>
      <div className="flex gap-3 w-max animate-marquee mb-3 pl-3">
        {ROW1.map((r, i) => <Card key={i} r={r} />)}
      </div>
      <div className="flex gap-3 w-max animate-marquee-reverse pl-3">
        {ROW2.map((r, i) => <Card key={i} r={r} />)}
      </div>
    </section>
  );
}
