import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";

// Scalable data model: just add a new object to this array for new lines
type LineageLine = {
  id: string;          // unique key
  title: string;       // e.g., "Spring 2024 — The ____ Line"
  subtitle?: string;   // e.g., "Crossed: April 2024"
  photoAlt: string;
  // For now use a placeholder block. Later you can swap to Image with a local file path.
  members: string[];
};

const lines: LineageLine[] = [
  {
    id: "line-2025-spring",
    title: "Spring 2025 — The 8 Bolts of Immortality",
    subtitle: "Crossed: Spring 2025",
    photoAlt: "Line photo",
    members: ["#1 Roberto Gilbert - Savior", "#2 Malachi Paulin - Stormbreaker", "#3 Adrian Griner - Visionary", "#4 Dharnell Leonard - Kratos", "#5 Justin Suriel - Solace", "#6 Jeremiah Williams - Hercules", "#7 Jalen Brooks - Relentless", "#8 Nathan Lyn - Static"],
  },
  {
    id: "line-2024-spring",
    title: "Spring 2024 — The 6 P.A.T.H.S",
    subtitle: "Crossed: Spring 2024",
    photoAlt: "Line photo",
    members: ["#1 Kenny Pierre - TENACEIOUS", "#2 Sheldon Graham - CATALYST", "#3 Jové Semexant - THE MARKSMAN", "#4 Isaiah Collier - DOOMSDAY", "#5 William Kiahon II - VIBRANIUM", "#6 AJ Washington III - ARES"],
  },
  {
    id: "line-2023-spring",
    title: "Spring 2023 — The Five Shadows of Totality",
    subtitle: "Crossed: Spring 2023",
    photoAlt: "Line photo",
    members: ["#1 Dabrian Stanley - SHAZAM", "#2 Elijah Times - POSEIDON", "#3 Jerin Jennings - CASANOVA", "#4 Mack Desima - MAB PSYCHO", "#5 Stanley Pierre Gilles - THE ASCENDANT"],
  },
  {
    id: "line-2022-spring",
    title: "Spring 2022 — The Syndicate",
    subtitle: "Crossed: Spring 2022",
    photoAlt: "Line photo",
    members: ["#1 Woodly Fenelus - MaeStro", "#2 Joshua Toombs - Rick RoSS", "#3 Brandyn Holmes - SlaughterHouSe", "#5 Jason Davis - Steadfast", "#6 David De Zayas - Shikamaru", "#8 Abner Devallon III - Shotgun", "#9 Woody Lanot - PrometheuS", "#10 Christopher Jean - TAILor MADE"],
  },
  {
    id: "line-2021-spring",
    title: "Spring 2021 — The Seven Deadly S.I.N.S",
    subtitle: "Crossed: Spring 2021",
    photoAlt: "Line photo",
    members: ["#2 Malique Walker - OSMIUM", "#4 Dylan Leemook - MELIODAS", "#5 Dominic Davis - SOULSTICE", "#6 Kingwood Colin - ECLIPSE", "#7 Stedmon Ihejirkia - THE SOVEREIGN"],
  },
  {
    id: "line-2019-fall",
    title: "Fall 2019 — Superior Six",
    subtitle: "Crossed: Fall 2019",
    photoAlt: "Line photo",
    members: ["#1 Silas Powell - SUPREME", "#2 John McLeod Jr - THANOS", "#3 Joshua Norgaisse - DAUNTLESS", "#4 Jamison Jackson - EL CHAPO", "#5 Everton Wood - SHOWTIME", "#6 Kristian Munnings - KURAMA"],
  },
  {
    id: "line-2019-spring",
    title: "Spring 2019 — The Arsenal",
    subtitle: "Crossed: Spring 2019",
    photoAlt: "Line photo",
    members: ["#1 Quincy Jamal Mather - OVERWATCH", "#2 Jordon-Lee Dixon - FORTRESS", "#3 Jaylen Reed - THE SERGEANT", "#4 Ridge Karlens Mezile - S.E.A.L.", "#5 Alexander Almonor - ARTILLERY", "#6 Joalem Numa - S.N.I.P.E.R.", "#7 Quick Howard - S.H.I.E.L.D."],
  },
  {
    id: "line-2017-fall",
    title: "Fall 2017 — Covert OPS",
    subtitle: "Crossed: Fall 2017",
    photoAlt: "Line photo",
    members: ["#3 Casey Ermitus - Alchemist", "#5 Keshawn Jones - F.A.I.T.H."],
  },
  {
    id: "line-2017-spring",
    title: "Spring 2017 — Blu Renaissance",
    subtitle: "Crossed: Spring 2017",
    photoAlt: "Line photo",
    members: ["#1 Adrian Whyte - AriStotle", "#2 Danny Glover - RuthleSS", "#3 Derione De Leon - Medici", "#5 Nick Wise - The Prince"],
  },
  {
    id: "line-2016-spring",
    title: "Spring 2016 — Sons of Anarchy",
    subtitle: "Crossed: Spring 2016",
    photoAlt: "Line photo",
    members: ["#1 Ira Murray Jr. - Resilient", "#2 Tercel Sandifer - Kill Switch", "#3 Victor Louis - Mafioso", "#4 Ian Carter II - The Icon", "#5 LB Crummel - The MasterMind", "#6 Aaron Ross - Mayhem", "#7 Karlon Quarrie - The Prophet", "#8 Brandon Nightingale - Dynasty"],
  },
  {
    id: "line-2015-spring",
    title: "Spring 2015 — Dawn of a New E.R.A.",
    subtitle: "Crossed: Spring 2015",
    photoAlt: "Line photo",
    members: ["#1 Danny Desilus - The Prodigy", "#2 Charles Metellus - Public Enemy", "#4 Jalil Davis - Nemesis", "#5 Jacob Delorme - Carnage", "#11 Phantom - Jeavon Todd", "#12 Optimus Prime - Vincent Crenshaw"],
  },
  {
    id: "line-2014-spring",
    title: "Spring 2014 — The Ultimatum",
    subtitle: "Crossed: Spring 2014",
    photoAlt: "Line photo",
    members: ["#1 Carl Morrison Jr. - Rewind", "#2 Demetrius Johnson - The Grinch", "#3 Velton Ivory - Triple Threat", "#4 Tariq Perkins - The Wise Guy", "#5 Wahkeem Whyte - Decypher", "#6 Michael Guerrier - The Riddler", "#7 Farzad-Elhaam Kohzad - Hard Drive", "#8 Demetrius Watts - The Professor"],
  },
  {
    id: "line-2012-spring",
    title: "Spring 2012 — 8 S.O.L.L.D.",
    subtitle: "Crossed: Spring 2012",
    photoAlt: "Line photo",
    members: ["#1 Brandon Whatley - Iron Fist", "#4 Eric Chandler - Adamantium", "#5 Brandon Payne - S.P.I.T.T.A.", "#6 Jonathan Parker - A.T.L.A.S.", "#7 Michael Deneus - P.R.E.S.S.U.R.E.", "#8 Nathan Rucker - Lion Heart", "#9 Leonard Willoughby - Titan", "#10 Tim Nightingale Jr. - The Successor"],
  },
  {
    id: "line-2011-spring",
    title: "Spring 2011 — The Commission",
    subtitle: "Crossed: Spring 2011",
    photoAlt: "Line photo",
    members: ["#1 Face Off - Kelvin Latson", "#2 The Show - Brandon Campbell", "#3 The Diplomat - Kenny Parker", "#4 Crime M.A.B. - Kendall Graham", "#5 S.H.O.O.T.E.R. - Michael Kilpatrick", "#6 Smoke - Michael Richardson", "#7 Don Corleone - Mark Atkins"],
  },
  {
    id: "line-2009-fall",
    title: "Fall 2009 — The Odyssey",
    subtitle: "Crossed: Fall 2009",
    photoAlt: "Line photo",
    members: ["#1 Maverick - Winegard Exis", "#2 The C.O.R.E. - Keat Simon", "#3 Prototype - Amir Rashid", "#4 Braveheart - Anwar Rashid", "#5 F.R.E.S.H. - Jamal McNab", "#6 The Truth - Marlon McCrae", "#7 Fearless - Shaun W. Mosley", "#8 Flatline - David Lewis", '#9 Illmatic - Luidgi "Dejey" Andou', "#10 Infamous - Omar Hansborough"],
  },
  {
    id: "line-2008-fall",
    title: "Fall 2008 — Late Registration",
    subtitle: "Crossed: Fall 2008",
    photoAlt: "Line photo",
    members: ["#1 Bloodline - Landon Hamilton", "#2 Two Face - Shawn Dilbert", "#3 Flawless - Lamech Bob-Manuel", "#4 Overdrive - Ethan Johnson", "#5 Nostradamus - Andres Caceres", "#6 Triumph - De-Shazo Wilkinson", "#7 H.E.I.S.T. - Alan Beauchamp", "#8 Apollo - Tarran Dean"],
  },
  {
    id: "line-2007-fall",
    title: "Fall 2007 — Cross Into The Blue",
    subtitle: "Crossed: Fall 2007",
    photoAlt: "Line photo",
    members: ["#1 Adrenaline - Eduardo Ciprian", "#2 C.E.O. - Michael Rape", "#3 Stealth - Andre Ishmael", "#4 C.R.A.S.H. - Max Duclos", "#5 King Pin - Marcel Rosegreen", "#6 S.T.E.E.L. - Mike Clark", "#7 High Octane - James Bealts", "#8 Kamikaze - Devon Jackson", "#9 Magnum - Marlon Williams", "#10 X-Rated - Frandy D."],
  },
  {
    id: "line-2006-fall",
    title: "Fall 2006 — Legacy: The Saga Continues",
    subtitle: "Crossed: Fall 2006",
    photoAlt: "Line photo",
    members: ["#1 The Prophecy - Tray Hartwell", "#2 The Franchise - Nate Ferdinand", "#3 Unleashed - Randy Jenkins", "#4 Death Rho - Calvin Brown", "#5 Menace - Tiovanni Carter", "#6 Alcatraz - Sean Robinson"],
  },
  {
    id: "line-2006-spring",
    title: "Spring 2006 — S.W.A.T.",
    subtitle: "Crossed: Spring 2006",
    photoAlt: "Line photo",
    members: ["#1 Lethal - Anthony Lawrence", "#3 Vendetta - Michael Johnson", "#4 Assassin - Jeremy Graham", "#5 Bulletproof - Cliff Nembhard"],
  },
  {
    id: "line-2004-fall",
    title: "Fall 2004 — Crucial Conflict",
    subtitle: "Crossed: Fall 2004",
    photoAlt: "Line photo",
    members: ["#1 Ghostface - Daniel Destouche", "#2 Encore - Michael Felix", "#3 Die Hard - Andy Lubin", "#4 Renegade - David Benoit", "#5 Flipmode - Carl Hamilton", "#6 Untouchable - Dean Roberts"],
  },
  {
    id: "line-2004-summer",
    title: "Summer 2004 — Sum of All Fears",
    subtitle: "Crossed: Summer 2004",
    photoAlt: "Line photo",
    members: ["#2 Main Event - David Rios", "#3 Resurrection - Evans Cade", "#4 Blueprint - Kevin Lawson", "#5 Aftermath - Chris Harris"],
  },
  {
    id: "line-2003-summer",
    title: "Summer 2003 — The Last of a Dying Breed",
    subtitle: "Crossed: Summer 2003",
    photoAlt: "Line photo",
    members: ["#1 Cryptonite - Edwin Rodriguez", "#2 Redemption - Matthew Shaw", "#3 Eruption - Oscar Villa", "#4 Titanium - Brian Jenkins"],
  },
  {
    id: "line-2003-spring",
    title: "Spring 2003 — Blue Dilemma",
    subtitle: "Crossed: Spring 2003",
    photoAlt: "Line photo",
    members: ["#2 Controversy - Emmanuel Claimon", "#6 S.O.L.O./The Legendary S.O.L.O. - Adam Barnes"],
  },
  {
    id: "line-2002-summer",
    title: "Summer 2002 — Last Man Standing",
    subtitle: "Crossed: Summer 2002",
    photoAlt: "Line photo",
    members: ["#6 S.O.L.O./The Legendary S.O.L.O. - Adam Barnes"],
  },
  {
    id: "line-2002-spring",
    title: "Spring 2002 — The Lost Boyz",
    subtitle: "Crossed: Spring 2002",
    photoAlt: "Line photo",
    members: ["#2 Genesis - Stephen Little", "#3 Unbreakable - Carlos Thompson", "#4 Prime Suspect - Anthony Chambers", "#5 Incognito - Olu Aduloju"],
  },
  {
    id: "line-1999-summer",
    title: "Summer 1999 — Fantastic Four",
    subtitle: "Crossed: Summer 1999",
    photoAlt: "Line photo",
    members: ["#1 Torch - Edmund St. John", "#2 Ironman - Greg Curry", "#3 Sandman - Marvin Poliard", "#4 Tantrum - Sherwin Campbell"],
  },
  {
    id: "line-1999-spring",
    title: "Spring 1999 — Extinction Level Event",
    subtitle: "Crossed: Spring 1999",
    photoAlt: "Line photo",
    members: ["#1 Apocalypse - Dustin Myrie", "#3 Subzero - Jerell Little", "#4 Salvation - Tracy Hines", "#6 Mass Destruction - Jermichael Duffy"],
  },
  {
    id: "line-1998-spring",
    title: "Spring 1998 — The One and Only Iota Rho Records",
    subtitle: "Crossed: Spring 1998",
    photoAlt: "Line photo",
    members: ["#1 Makaveli - Bjorn Baker-Hendricks", "#2 Spawn - Corey Brown", "#3 Ruckus - Schiller Jerome", "#4 Snake Eyes - John Fraser III", "#5 Screwface - Edward Gardner"],
  },
  {
    id: "line-1997-spring",
    title: "Spring 1997 — The Dirty South",
    subtitle: "Crossed: Spring 1997",
    photoAlt: "Line photo",
    members: ["#1 Scarface - Julio Lopez", "#2 The Don - Willie Harrell II"],
  },
  {
    id: "line-1996-fall",
    title: "Fall 1996 — Mafioso",
    subtitle: "Crossed: Fall 1996",
    photoAlt: "Line photo",
    members: ["#1 Cold Sweat - Corey McCall", "#2 007 - Marlon Ollivierre", "#3 Carlito - Denzil Lawrence", "#4 Stoneface - Brian Jackson", "#5 Godfather - George Smith", "#6 Lil Capone - Earnest Williams"],
  },
  {
    id: "line-1994-spring",
    title: "Spring 1994 — X-Men",
    subtitle: "Crossed: Spring 1994",
    photoAlt: "Line photo",
    members: ["#1 Sabertooth - Mike Ray Huff", "#2 Nightcrawler/Nino Brown - Louis Lubin", '#3 Wolverine - Alton "Gerard" Davis', "#5 Sinister - Gregory Brown", "#6 Juggernaut - Kevin Stewart"],
  },
  {
    id: "line-1992-fall",
    title: "Fall 1992 — Deep Cover",
    subtitle: "Crossed: Fall 1992",
    photoAlt: "Line photo",
    members: ["#1 Half Pint - Omar Watson", "#2 Jasper - Robert Alexander", "#3 Tinsdale/Zeus - Curtis Dix"],
  },
  {
    id: "line-1992-spring",
    title: "Spring 1992 — Injured Reserves",
    subtitle: "Crossed: Spring 1992",
    photoAlt: "Line photo",
    members: ["#1 Robin Hood - Earl Silas", "#2 Doughboy/Chill - Willie Britton", '#3 Eazy "E" - Eddie Foster', "#4 Choir Boy - Derrick Thomas"],
  },
  {
    id: "line-1990-fall",
    title: "Fall 1990 — 2 X Hard",
    subtitle: "Crossed: Fall 1990",
    photoAlt: "Line photo",
    members: ["#2 High I.Q. - Reginald Reed", "#4 Robert Lee Connor"],
  },
  {
    id: "line-1990-spring",
    title: "Spring 1990 — Royal Eruption",
    subtitle: "Crossed: Spring 1990",
    photoAlt: "Line photo",
    members: ["#1 Time Bomb - Ronald Brown", "#2 3D - Donovan Davis", "#3 Earthquake - Victor Marsh", "#4 Chocolate Thunder - Travers Johnson", '#6 Natural Explosion - Alexander "Buster" Mills'],
  },
  {
    id: "line-1986-spring",
    title: "Spring 1986 — Vice Squad",
    subtitle: "Crossed: Spring 1986",
    photoAlt: "Line photo",
    members: ["#2 Lieutenant Cowboy - Kevin Williams", "#3 Sgt. Hound - William Carter", "#4 Captain Quake - Rico Ford"],
  },
  {
    id: "line-1985-spring",
    title: "Spring 1985 — Double Trouble",
    subtitle: "Crossed: Spring 1985",
    photoAlt: "Line photo",
    members: ["#1 Headache - Kenneth Burgess", "#2 Heartache - Keith Sherrer"],
  },
  {
    id: "line-1984-summer",
    title: "Summer 1984 — The Force",
    subtitle: "Crossed: Summer 1984",
    photoAlt: "Line photo",
    members: ["#2 Boy Wonder - Al Bucknor", "#3 Ice Water - Keith Bucknor", "#5 Chapter Corruption - Reggie Pierre"],
  },
  {
    id: "founders-1978",
    title: "Founder — June 8, 1978",
    subtitle: "Charter Members",
    photoAlt: "Line photo",
    members: ["Eldrid E. Cheves", "Kelvin C. Forde", "Bruce L. Handly", "Ricky L. Jones", "Garly L. Thomas", "Samual Tolliver"],
  },
];

export default function LineagePage() {
  return (
    <PageShell
      title="Lineage"
      subtitle="A timeline of the Iota Rho Chapter’s lines. New lines can be added easily as the chapter grows."
    >
      {/* Timeline */}
      <div className="relative">
        {/* vertical line */}
        <div className="absolute left-4 top-0 h-full w-px bg-white/10 md:left-8" />

        <div className="space-y-8">
          {lines.map((line) => (
            <div key={line.id} className="relative pl-12 md:pl-20">
              {/* timeline dot */}
              <div className="absolute left-2 top-8 h-4 w-4 rounded-full bg-sigma-blue ring-4 ring-white/10 md:left-6" />

              <ThemedCard>
                <div className="grid gap-6 md:grid-cols-[260px_1fr] md:items-start">
                  {/* Photo (placeholder) */}
                  <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/5">
                    <div className="aspect-[4/3] w-full bg-gradient-to-br from-white/10 to-black/20" />
                    <div className="px-4 py-3">
                      <p className="text-xs text-white/60">{line.photoAlt}</p>
                      <p className="text-xs text-white/40">
                        Replace with a real line photo later
                      </p>
                    </div>
                  </div>

                  {/* Text */}
                  <div>
                    <h2 className="text-xl font-semibold tracking-tight">
                      {line.title}
                    </h2>
                    {line.subtitle ? (
                      <p className="mt-1 text-sm text-white/60">{line.subtitle}</p>
                    ) : null}

                    <div className="mt-5">
                      <h3 className="text-sm font-semibold text-white/80">
                        Members
                      </h3>

                      <ul className="mt-3 space-y-2">
                        {line.members.map((name) => (
                          <li
                            key={`${line.id}-${name}`}
                            className="rounded-lg border border-white/10 bg-black/10 px-3 py-2 text-sm text-white/80"
                          >
                            {name}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </ThemedCard>
            </div>
          ))}
        </div>
      </div>
    </PageShell>
  );
}
