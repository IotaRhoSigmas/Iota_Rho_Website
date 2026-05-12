import PageShell from "@/components/PageShell";

const president = {
  name: "Dharnel Leonard",
  role: "President",
  image: "/images/board/president.jpg",
};

const vicePresidents = [
  {
    name: "Malachi Paulin",
    role: "1st Vice President",
    image: "/images/board/first-vp.jpg",
  },
  {
    name: "Alfred Washington III",
    role: "2nd Vice President",
    image: "/images/board/second-vp.jpg",
  },
];

const board = [
  {
    name: "Adrian Griner",
    role: "Secretary",
    image: "/images/board/secretary.jpg",
  },
  {
    name: "Roberto Gilbert",
    role: "Treasurer",
    image: "/images/board/treasurer.jpg",
  },
  {
    name: "Justin Suriel",
    role: "Historian",
    image: "/images/board/historian.jpg",
  },
  {
    name: "Jeremiah Williams",
    role: "Parliamentarian",
    image: "/images/board/parliamentarian.jpg",
  },
];

function BoardCard({
  name,
  role,
  image,
  large = false,
}: {
  name: string;
  role: string;
  image: string;
  large?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl border border-white/10 bg-white/5 p-5 text-center backdrop-blur transition hover:bg-white/10",
        large ? "mx-auto max-w-sm" : "",
      ].join(" ")}
    >
      <div className="mx-auto flex aspect-square w-full max-w-[220px] items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-white/10 to-blue-950/40 text-xs text-white/40">
        {image}
      </div>

      <h2 className="mt-5 text-xl font-light text-white">{name}</h2>
      <p className="mt-2 text-xs uppercase tracking-[0.25em] text-blue-400">
        {role}
      </p>
    </div>
  );
}

export default function ExecutiveBoardPage() {
  return (
    <PageShell
      title="Executive Board"
      subtitle="Leadership of the Iota Rho Chapter."
    >
      <section className="space-y-12">
        <BoardCard {...president} large />

        <div className="mx-auto grid max-w-3xl gap-6 md:grid-cols-2">
          {vicePresidents.map((member) => (
            <BoardCard key={member.role} {...member} />
          ))}
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {board.map((member) => (
            <BoardCard key={member.role} {...member} />
          ))}
        </div>
      </section>
    </PageShell>
  );
}