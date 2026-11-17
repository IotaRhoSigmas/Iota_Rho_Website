import type { Metadata } from "next";
import Image, { type StaticImageData } from "next/image";
import PageShell from "@/components/PageShell";
import ThemedCard from "@/components/ThemedCard";
import charterPhoto from "./lineage-photos/Charter.jpg";
import spring1992photo from "./lineage-photos/spring1992.jpeg";
import fall19Photo from "./lineage-photos/Fall19.jpg";
import summer04Photo from "./lineage-photos/summer04.jpg";
import fall04Photo from "./lineage-photos/fall04.jpg";
import fall06Photo from "./lineage-photos/fall06.jpg";
import fall07Photo from "./lineage-photos/fall07.png";
import fall08Photo from "./lineage-photos/fall08.jpg";
import fall09Photo from "./lineage-photos/fall09.jpg";
import fall17Photo from "./lineage-photos/fall17.jpeg";
import spring11Photo from "./lineage-photos/spring11.jpg";
import spring12Photo from "./lineage-photos/spring12_.jpg";
import spring14Photo from "./lineage-photos/spring14.jpg";
import spring15Photo from "./lineage-photos/spring15.jpg";
import spring16Photo from "./lineage-photos/spring16.jpg";
import spring17Photo from "./lineage-photos/spring17.jpg";
import spring19Photo from "./lineage-photos/spring19.jpg";
import spring21Photo from "./lineage-photos/spring21.jpg";
import spring22Photo from "./lineage-photos/spring22.jpg";
import spring23Photo from "./lineage-photos/spring23.webp";
import spring24Photo from "./lineage-photos/spring24.jpg";
import spring25Photo from "./lineage-photos/spring25.jpeg";
import fall26Photo from "./lineage-photos/fall26.jpeg";

export const metadata: Metadata = {
  title: "Lineage",
  description:
    "Explore the lineage and chapter lines of the Iota Rho Chapter of Phi Beta Sigma at UCF.",
};

type LineageLine = {
  id: string;
  title: string;
  subtitle?: string;
  photo?: StaticImageData;
  photoAlt: string;
  members: string[];
};

const lines: LineageLine[] = [
  {
    id: "line-2026-fall",
    title: "Fall 2026 - THE REΣURGENCE",
    subtitle: "Crossed: Fall 2026",
    photo: fall26Photo,
    photoAlt: "Fall 2026 line photo",
    members: [
      "#1 Destin Wilson - INVINCIBLE ",
      "#2 Nathaniel Surrancy - CONQUEΣT",
      "#3 Delisma Desir - THR3ΣΗΟLD",
      "#4 Kenny Hyppolite - PULΣE"
    ],
  },
  {
    id: "line-2025-spring",
    title: "Spring 2025 — The 8 BoltΣ of Immortality",
    subtitle: "Crossed: Spring 2025",
    photo: spring25Photo,
    photoAlt: "Spring 2025 line photo",
    members: [
      "#1 Roberto Gilbert - Σavior",
      "#2 Malachi Paulin - Σtormbreaker",
      "#3 Adrian Griner - ViΣionary",
      "#4 Dharnell Leonard - KratoΣ",
      "#5 Justin Suriel - Σolace",
      "#6 Jeremiah Williams - HerculeΣ",
      "#7 Jalen Brooks - RelentleΣΣ",
      "#8 Nathan Lyn - Σtatic",
    ],
  },
  {
    id: "line-2024-spring",
    title: "Spring 2024 — The 6 P.A.T.H.Σ",
    subtitle: "Crossed: Spring 2024",
    photo: spring24Photo,
    photoAlt: "Spring 2024 line photo",
    members: [
      "#1 Kenny Pierre - TENACEIOUΣ",
      "#2 Sheldon Graham - CATALYΣT",
      "#3 Jové Semexant - THE MARKΣMAN",
      "#4 Isaiah Collier - DOOMΣDAY",
      "#5 William Kiahon II - VIBRANIUM",
      "#6 AJ Washington III - AREΣ",
    ],
  },
  {
    id: "line-2023-spring",
    title: "Spring 2023 — The Five ΣhadowΣ of Totality",
    subtitle: "Crossed: Spring 2023",
    photo: spring23Photo,
    photoAlt: "Spring 2023 line photo",
    members: [
      "#1 Dabrian Stanley - ΣHAZAM",
      "#2 Elijah Times - POΣEIDON",
      "#3 Jerin Jennings - CAΣANOVA",
      "#4 Mack Desima - MAB PΣYCHO",
      "#5 Stanley Pierregilles - THE AΣCENDANT",
    ],
  },
  {
    id: "line-2022-spring",
    title: "Spring 2022 — The Σyndicate",
    subtitle: "Crossed: Spring 2022",
    photo: spring22Photo,
    photoAlt: "Spring 2022 line photo",
    members: [
      "#1 Woodly Fenelus - MaeΣtro",
      "#2 Joshua Toombs - Rick RoΣΣ",
      "#3 Brandyn Holmes - ΣlaughterHouΣe",
      "#4 Tyler Walker - Innomin4te",
      "#5 Jason Davis - Σteadfast",
      "#6 David De Zayas - Σhikamaru",
      "#7 Domic Evans - AchilleΣ",
      "#8 Abner Devallon III - Σhotgun",
      "#9 Woody Lanot - PrometheuΣ",
      "#10 Christopher Jean - TAILor MADE",
    ],
  },
  {
    id: "line-2021-spring",
    title: "Spring 2021 — The Σeven Deadly Σ.I.N.S.",
    subtitle: "Crossed: Spring 2021",
    photo: spring21Photo,
    photoAlt: "Spring 2021 line photo",
    members: [
      "#1 John(Kevin) Wright - DA V1NCI",
      "#2 Malique Walker - OΣMIUM",
      "#3 Lens Laborde - HII POW3R",
      "#4 Dylan Leemook - MELIODAΣ",
      "#5 Dominic Davis - ΣOULSTICE",
      "#6 Kingwood Colin - ECLIPΣE",
      "#7 Stedmon Ihejirkia - THE ΣOVEREIGN",
    ],
  },
  {
    id: "line-2019-fall",
    title: "Fall 2019 — Σuperior Σix",
    subtitle: "Crossed: Fall 2019",
    photo: fall19Photo,
    photoAlt: "Fall 2019 line photo",
    members: [
      "#1 Silas Powell - ΣUPREME",
      "#2 John McLeod Jr - THANOΣ",
      "#3 Joshua Norgaisse - DAUNTLEΣΣ",
      "#4 Jamison Jackson - EL CHAPO",
      "#5 Everton Wood - ΣHOWTIME",
      "#6 Kristian Munnings - KURAMA",
    ],
  },
  {
    id: "line-2019-spring",
    title: "Spring 2019 — The ArΣenal",
    subtitle: "Crossed: Spring 2019",
    photo: spring19Photo,
    photoAlt: "Spring 2019 line photo",
    members: [
      "#1 Quincy Jamal Mather - OVERWATCH",
      "#2 Jordon-Lee Dixon - FORTREΣΣ",
      "#3 Jaylen Reed - THE ΣERGEANT",
      "#4 Ridge Karlens Mezile - Σ.E.A.L.",
      "#5 Alexander Almonor - ARTILLERY",
      "#6 Joalem Numa - Σ.N.I.P.E.R.",
      "#7 Quick Howard - Σ.H.I.E.L.D.",
    ],
  },
  {
    id: "line-2017-fall",
    title: "Fall 2017 — Covert OPΣ",
    subtitle: "Crossed: Fall 2017",
    photo: fall17Photo,
    photoAlt: "Fall 2017 line photo",
    members: ["#3 Casey Ermitus - Alchemist", "#5 Keshawn Jones - F.A.I.T.H."],
  },
  {
    id: "line-2017-spring",
    title: "Spring 2017 — Blu RenaiΣΣance",
    subtitle: "Crossed: Spring 2017",
    photo: spring17Photo,
    photoAlt: "Spring 2017 line photo",
    members: [
      "#1 Adrian Whyte - AriΣtotle",
      "#2 Danny Glover - RuthleΣΣ",
      "#3 Derione De Leon - Medici",
      "#5 Nick Wise - The Prince",
    ],
  },
  {
    id: "line-2016-spring",
    title: "Spring 2016 — Σons of Anarchy",
    subtitle: "Crossed: Spring 2016",
    photo: spring16Photo,
    photoAlt: "Spring 2016 line photo",
    members: [
      "#1 Ira Murray Jr. - Resilient",
      "#2 Tercel Sandifer - Kill Switch",
      "#3 Victor Louis - Mafioso",
      "#4 Ian Carter II - The Icon",
      "#5 LB Crummel - The MasterMind",
      "#6 Aaron Ross - Mayhem",
      "#7 Karlon Quarrie - The Prophet",
      "#8 Brandon Nightingale - Dynasty",
    ],
  },
  {
    id: "line-2015-spring",
    title: "Spring 2015 — Dawn of a New Σ.R.A.",
    subtitle: "Crossed: Spring 2015",
    photo: spring15Photo,
    photoAlt: "Spring 2015 line photo",
    members: [
      "#1 Danny Desilus - The Prodigy",
      "#2 Charles Metellus - Public Enemy",
      "#4 Jalil Davis - Nemesis",
      "#5 Jacob Delorme - Carnage",
    ],
  },
  {
    id: "line-2014-spring",
    title: "Spring 2014 — The Ultimatum",
    subtitle: "Crossed: Spring 2014",
    photo: spring14Photo,
    photoAlt: "Spring 2014 line photo",
    members: [
      "#1 Carl Morrison Jr. - Rewind",
      "#2 Demetrius Johnson - The Grinch",
      "#3 Velton Ivory - Triple Threat",
      "#4 Tariq Perkins - The Wise Guy",
      "#5 Wahkeem Whyte - Decypher",
      "#6 Michael Guerrier - The Riddler",
      "#7 Farzad-Elhaam Kohzad - Hard Drive",
      "#8 Demetrius Watts - The Professor",
    ],
  },
  {
    id: "line-2012-spring",
    title: "Spring 2012 — 8 S.O.L.I.D.",
    subtitle: "Crossed: Spring 2012",
    photo: spring12Photo,
    photoAlt: "Spring 2012 line photo",
    members: [
      "#1 Brandon Whatley - Iron Fist",
      "#4 Eric Chandler - Adamantium",
      "#5 Brandon Payne - S.P.I.T.T.A.",
      "#6 Jonathan Parker - A.T.L.A.S.",
      "#7 Michael Deneus - P.R.E.S.S.U.R.E.",
      "#8 Nathan Rucker - Lion Heart",
      "#9 Leonard Willoughby - Titan",
      "#10 Tim Nightingale Jr. - The Successor",
    ],
  },
  {
    id: "line-2011-spring",
    title: "Spring 2011 — The Commission",
    subtitle: "Crossed: Spring 2011",
    photo: spring11Photo,
    photoAlt: "Spring 2011 line photo",
    members: [
      "#1 Face Off - Kelvin Latson",
      "#2 The Show - Brandon Campbell",
      "#3 The Diplomat - Kenny Parker",
      "#4 Crime M.A.B. - Kendall Graham",
      "#5 S.H.O.O.T.E.R. - Michael Kilpatrick",
      "#6 Smoke - Michael Richardson",
      "#7 Don Corleone - Mark Atkins",
    ],
  },
  {
    id: "line-2009-fall",
    title: "Fall 2009 — The Odyssey",
    subtitle: "Crossed: Fall 2009",
    photo: fall09Photo,
    photoAlt: "Fall 2009 line photo",
    members: [
      "#1 Maverick - Winegard Exis",
      "#2 The C.O.R.E. - Keat Simon",
      "#3 Prototype - Amir Rashid",
      "#4 Braveheart - Anwar Rashid",
      "#5 F.R.E.S.H. - Jamal McNab",
      "#6 The Truth - Marlon McCrae",
      "#7 Fearless - Shaun W. Mosley",
      "#8 Flatline - David Lewis",
      '#9 Illmatic - Luidgi "Dejey" Andou',
      "#10 Infamous - Omar Hansborough",
    ],
  },
  {
    id: "line-2008-fall",
    title: "Fall 2008 — Late Registration",
    subtitle: "Crossed: Fall 2008",
    photo: fall08Photo,
    photoAlt: "Fall 2008 line photo",
    members: [
      "#1 Bloodline - Landon Hamilton",
      "#2 Two Face - Shawn Dilbert",
      "#3 Flawless - Lamech Bob-Manuel",
      "#4 Overdrive - Ethan Johnson",
      "#5 Nostradamus - Andres Caceres",
      "#6 Triumph - De-Shazo Wilkinson",
      "#7 H.E.I.S.T. - Alan Beauchamp",
      "#8 Apollo - Tarran Dean",
    ],
  },
  {
    id: "line-2007-fall",
    title: "Fall 2007 — Cross Into The Blue",
    subtitle: "Crossed: Fall 2007",
    photo: fall07Photo,
    photoAlt: "Fall 2007 line photo",
    members: [
      "#1 Adrenaline - Eduardo Ciprian",
      "#2 C.E.O. - Michael Rape",
      "#3 Stealth - Andre Ishmael",
      "#4 C.R.A.S.H. - Max Duclos",
      "#5 King Pin - Marcel Rosegreen",
      "#6 S.T.E.E.L. - Mike Clark",
      "#7 High Octane - James Bealts",
      "#8 Kamikaze - Devon Jackson",
      "#9 Magnum - Marlon Williams",
      "#10 X-Rated - Frandy D.",
      "#11 Phantom - Jeavon Todd",
      "#12 Optimus Prime - Vincent Crenshaw",
    ],
  },
  {
    id: "line-2006-fall",
    title: "Fall 2006 — Legacy: The Saga Continues",
    subtitle: "Crossed: Fall 2006",
    photo: fall06Photo,
    photoAlt: "Fall 2006 line photo",
    members: [
      "#1 The Prophecy - Tray Hartwell",
      "#2 The Franchise - Nate Ferdinand",
      "#3 Unleashed - Randy Jenkins",
      "#4 Death Rho - Calvin Brown",
      "#5 Menace - Tiovanni Carter",
      "#6 Alcatraz - Sean Robinson",
    ],
  },
  {
    id: "line-2006-spring",
    title: "Spring 2006 — S.W.A.T.",
    subtitle: "Crossed: Spring 2006",
    photoAlt: "Spring 2006 line photo",
    members: [
      "#1 Lethal - Anthony Lawrence",
      "#3 Vendetta - Michael Johnson",
      "#4 Assassin - Jeremy Graham",
      "#5 Bulletproof - Cliff Nembhard",
    ],
  },
  {
    id: "line-2004-fall",
    title: "Fall 2004 — Crucial Conflict",
    subtitle: "Crossed: Fall 2004",
    photo: fall04Photo,
    photoAlt: "Fall 2004 line photo",
    members: [
      "#1 Ghostface - Daniel Destouche",
      "#2 Encore - Michael Felix",
      "#3 Die Hard - Andy Lubin",
      "#4 Renegade - David Benoit",
      "#5 Flipmode - Carl Hamilton",
      "#6 Untouchable - Dean Roberts",
    ],
  },
  {
    id: "line-2004-summer",
    title: "Summer 2004 — Sum of All Fears",
    subtitle: "Crossed: Summer 2004",
    photo: summer04Photo,
    photoAlt: "Summer 2004 line photo",
    members: [
      "#2 Main Event - David Rios",
      "#3 Resurrection - Evans Cade",
      "#4 Blueprint - Kevin Lawson",
      "#5 Aftermath - Chris Harris",
    ],
  },
  {
    id: "line-2003-summer",
    title: "Summer 2003 — The Last of a Dying Breed",
    subtitle: "Crossed: Summer 2003",
    photoAlt: "Summer 2003 line photo",
    members: [
      "#1 Cryptonite - Edwin Rodriguez",
      "#2 Redemption - Matthew Shaw",
      "#3 Eruption - Oscar Villa",
      "#4 Titanium - Brian Jenkins",
    ],
  },
  {
    id: "line-2003-spring",
    title: "Spring 2003 — Blue Dilemma",
    subtitle: "Crossed: Spring 2003",
    photoAlt: "Spring 2003 line photo",
    members: ["#2 Controversy - Emmanuel Claimon"],
  },
  {
    id: "line-2002-summer",
    title: "Summer 2002 — Last Man Standing",
    subtitle: "Crossed: Summer 2002",
    photoAlt: "Summer 2002 line photo",
    members: ["#6 S.O.L.O./The Legendary S.O.L.O. - Adam Barnes"],
  },
  {
    id: "line-2002-spring",
    title: "Spring 2002 — The Lost Boyz",
    subtitle: "Crossed: Spring 2002",
    photoAlt: "Spring 2002 line photo",
    members: [
      "#2 Genesis - Stephen Little",
      "#3 Unbreakable - Carlos Thompson",
      "#4 Prime Suspect - Anthony Chambers",
      "#5 Incognito - Olu Aduloju",
    ],
  },
  {
    id: "line-2001-spring",
    title: "Spring 2001 — Isaiah 54:17",
    subtitle: "Crossed: Spring 2001",
    photoAlt: "Spring 2001 line photo",
    members: [
      "#1 The Foundation - Jason Vialet",
      "#2 The Refiner/Master Chief - James Aladin",
      "#3 Lawgiver - Erik Range",
      "#5 The Highest - Justin Clarke",
    ],
  },
  {
    id: "line-2000-spring",
    title: "Spring 2000 — DRAMA",
    subtitle: "Crossed: Spring 2000",
    photoAlt: "Spring 2000 line photo",
    members: [
      "#1 Quietstorm - Mike Oratokhai",
      "#2 Misconception - Zach Taylor",
      "#4 Havoc - Sean Wright",
      "#5 C.H.A.O.S. - Doug Lawson",
    ],
  },
  {
    id: "line-1999-summer",
    title: "Summer 1999 — Fantastic Four",
    subtitle: "Crossed: Summer 1999",
    photoAlt: "Summer 1999 line photo",
    members: [
      "#1 Torch - Edmund St. John",
      "#2 Ironman - Greg Curry",
      "#3 Sandman - Marvin Poliard",
      "#4 Tantrum - Sherwin Campbell",
    ],
  },
  {
    id: "line-1999-spring",
    title: "Spring 1999 — Extinction Level Event",
    subtitle: "Crossed: Spring 1999",
    photoAlt: "Spring 1999 line photo",
    members: [
      "#1 Apocalypse - Dustin Myrie",
      "#3 Subzero - Jerell Little",
      "#4 Salvation - Tracy Hines",
      "#6 Mass Destruction - Jermichael Duffy",
    ],
  },
  {
    id: "line-1998-spring",
    title: "Spring 1998 — The One and Only Iota Rho Records",
    subtitle: "Crossed: Spring 1998",
    photoAlt: "Spring 1998 line photo",
    members: [
      "#1 Makaveli - Bjorn Baker-Hendricks",
      "#2 Spawn - Corey Brown",
      "#3 Ruckus - Schiller Jerome",
      "#4 Snake Eyes - John Fraser III",
      "#5 Screwface - Edward Gardner",
    ],
  },
  {
    id: "line-1997-spring",
    title: "Spring 1997 — The Dirty South",
    subtitle: "Crossed: Spring 1997",
    photoAlt: "Spring 1997 line photo",
    members: ["#1 Scarface - Julio Lopez", "#2 The Don - Willie Harrell II"],
  },
  {
    id: "line-1996-fall",
    title: "Fall 1996 — Mafioso",
    subtitle: "Crossed: Fall 1996",
    photoAlt: "Fall 1996 line photo",
    members: [
      "#1 Cold Sweat - Corey McCall",
      "#2 007 - Marlon Ollivierre",
      "#3 Carlito - Denzil Lawrence",
      "#4 Stoneface - Brian Jackson",
      "#5 Godfather - George Smith",
      "#6 Lil Capone - Earnest Williams",
    ],
  },
  {
    id: "line-1994-spring",
    title: "Spring 1994 — X-Men",
    subtitle: "Crossed: Spring 1994",
    photoAlt: "Spring 1994 line photo",
    members: [
      "#1 Sabertooth - Mike Ray Huff",
      "#2 Nightcrawler/Nino Brown - Louis Lubin",
      '#3 Wolverine - Alton "Gerard" Davis',
      "#5 Sinister - Gregory Brown",
      "#6 Juggernaut - Kevin Stewart",
    ],
  },
  {
    id: "line-1992-fall",
    title: "Fall 1992 — Deep Cover",
    subtitle: "Crossed: Fall 1992",
    photoAlt: "Fall 1992 line photo",
    members: [
      "#1 Half Pint - Omar Watson",
      "#2 Jasper - Robert Alexander",
      "#3 Tinsdale/Zeus - Curtis Dix",
    ],
  },
  {
    id: "line-1992-spring",
    title: "Spring 1992 — Injured Reserves",
    subtitle: "Crossed: Spring 1992",
    photo: spring1992photo,
    photoAlt: "Spring 1992 line photo",
    members: [
      "#1 Robin Hood - Earl Silas",
      "#2 Doughboy/Chill - Willie Britton",
      '#3 Eazy "E" - Eddie Foster',
      "#4 Choir Boy - Derrick Thomas",
    ],
  },
  {
    id: "line-1990-fall",
    title: "Fall 1990 — 2 X Hard",
    subtitle: "Crossed: Fall 1990",
    photoAlt: "Fall 1990 line photo",
    members: ["#2 High I.Q. - Reginald Reed", "#4 Robert Lee Connor"],
  },
  {
    id: "line-1990-spring",
    title: "Spring 1990 — Royal Eruption",
    subtitle: "Crossed: Spring 1990",
    photoAlt: "Spring 1990 line photo",
    members: [
      "#1 Time Bomb - Ronald Brown",
      "#2 3D - Donovan Davis",
      "#3 Earthquake - Victor Marsh",
      "#4 Chocolate Thunder - Travers Johnson",
      "#5 Smooth Rock - Dwayne Richardson",
      '#6 Natural Explosion - Alexander "Buster" Mills',
    ],
  },
  {
    id: "line-1986-spring",
    title: "Spring 1986 — Vice Squad",
    subtitle: "Crossed: Spring 1986",
    photoAlt: "Spring 1986 line photo",
    members: [
      "#2 Lieutenant Cowboy - Kevin Williams",
      "#3 Sgt. Hound - William Carter",
      "#4 Captain Quake - Rico Ford",
    ],
  },
  {
    id: "line-1985-spring",
    title: "Spring 1985 — Double Trouble",
    subtitle: "Crossed: Spring 1985",
    photoAlt: "Spring 1985 line photo",
    members: [
      "#1 Headache - Kenneth Burgess",
      "#2 Heartache - Keith Sherrer",
    ],
  },
  {
    id: "line-1984-summer",
    title: "Summer 1984 — The Force",
    subtitle: "Crossed: Summer 1984",
    photoAlt: "Summer 1984 line photo",
    members: [
      "#2 Boy Wonder - Al Bucknor",
      "#3 Ice Water - Keith Bucknor",
      "#5 Chapter Corruption - Reggie Pierre",
    ],
  },
  {
    id: "founders-1978",
    title: "Founder — June 8, 1978",
    subtitle: "Charter Members",
    photo: charterPhoto,
    photoAlt: "Iota Rho charter members photo",
    members: [
      "Eldrid E. Cheves",
      "Kelvin C. Forde",
      "Bruce L. Handly",
      "Ricky L. Jones",
      "Garly L. Thomas",
      "Samual Tolliver",
    ],
  },
];

export default function LineagePage() {
  const totalMembers = lines.reduce(
    (total, line) => total + line.members.length,
    0
  );

  return (
    <PageShell>
      <section className="relative isolate -mx-4 px-4 pt-6 pb-2 md:pt-10">
        <div className="pointer-events-none absolute left-1/2 top-[-11rem] -z-10 h-[42rem] w-screen -translate-x-1/2 bg-[radial-gradient(ellipse_at_top,rgba(37,99,235,0.24),rgba(15,23,42,0.22)_34%,rgba(2,6,23,0)_72%)] blur-2xl" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[34rem] w-screen -translate-x-1/2 bg-[radial-gradient(circle_at_50%_8%,rgba(59,130,246,0.16),rgba(2,6,23,0)_58%)]" />
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[38rem] w-screen -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(15,23,42,0.28),rgba(2,6,23,0)_68%)]" />

        <div className="relative mb-14 text-center">
          <p className="text-sm uppercase tracking-[0.35em] text-blue-400">
            Our Legacy • Our Brothers • Our Future
          </p>

          <h1 className="mt-5 text-4xl font-semibold uppercase tracking-[0.25em] text-white md:text-6xl">
            Lineage
          </h1>

          <div className="mx-auto mt-6 h-px w-24 bg-blue-500" />

          <p className="mx-auto mt-6 max-w-3xl text-base leading-8 text-white/70">
            A living timeline of the men who have carried the legacy of the
            Iota Rho Chapter forward through brotherhood, scholarship, and
            service.
          </p>
        </div>

        <div className="relative mx-auto mb-12 grid max-w-3xl gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur">
            <p className="text-3xl font-semibold text-white">{lines.length}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
              Lines
            </p>
          </div>

          <div className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 text-center backdrop-blur">
            <p className="text-3xl font-semibold text-white">{totalMembers}</p>
            <p className="mt-1 text-xs uppercase tracking-[0.25em] text-white/50">
              Brothers
            </p>
          </div>

        </div>

        <div className="relative">
          <div className="pointer-events-none absolute left-1/2 top-[-6rem] -z-10 h-72 w-screen -translate-x-1/2 bg-[linear-gradient(to_bottom,rgba(2,6,23,0),rgba(2,6,23,0.88)_42%,rgba(2,6,23,0)_100%)]" />
          <div className="absolute left-4 top-[-3rem] h-[calc(100%+3rem)] w-px bg-gradient-to-b from-blue-400/0 via-blue-400/25 to-blue-400/10 md:left-8" />

          <div className="space-y-6">
            {lines.map((line) => (
              <div key={line.id} className="relative pl-12 md:pl-20">
                <div className="absolute left-2 top-8 h-4 w-4 rounded-full border border-blue-300 bg-[#020617] ring-4 ring-blue-500/20 md:left-6" />

                <ThemedCard>
                  <div className="grid gap-6 lg:grid-cols-[260px_1fr] lg:items-start">
                    <div className="group overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
                      <div className="relative aspect-[4/3] overflow-hidden bg-gradient-to-br from-blue-500/20 via-white/5 to-black/30">
                        <Image
                          src={line.photo || "/images/home/pbs-crest.gif"}
                          alt={line.photoAlt}
                          fill
                          sizes="(min-width: 1024px) 260px, 100vw"
                          className={`opacity-85 transition duration-700 group-hover:scale-105 group-hover:opacity-100 ${
                            line.photo ? "object-cover" : "object-contain p-8"
                          }`}
                        />

                        <div className="absolute inset-0 bg-gradient-to-t from-[#020617]/70 via-transparent to-transparent" />

                        <div className="absolute bottom-0 left-0 right-0 p-4">
                          <p className="text-xs uppercase tracking-[0.25em] text-blue-200/80">
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <div className="flex flex-col gap-4 md:flex-row md:items-start md:justify-between">
                        <div>
                          <p className="text-xs uppercase tracking-[0.25em] text-blue-300">
                            {line.subtitle}
                          </p>

                          <h2 className="mt-2 text-xl font-semibold tracking-tight text-white md:text-2xl">
                            {line.title}
                          </h2>
                        </div>

                        <div className="w-fit rounded-full border border-blue-400/20 bg-blue-500/10 px-4 py-2 text-sm text-blue-100">
                          {line.members.length} Members
                        </div>
                      </div>

                      <div className="mt-6 grid gap-2 sm:grid-cols-2 xl:grid-cols-3">
                        {line.members.map((name) => (
                          <div
                            key={`${line.id}-${name}`}
                            className="rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/75 transition hover:border-blue-300/30 hover:bg-blue-500/10 hover:text-white"
                          >
                            {name}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </ThemedCard>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
