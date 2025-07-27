import Contact from "../components/Contact";

export const metadata = {
  title: "Contact | Phatlim Limited",
};

export default function HomePage() {
  return (
    <div className="bg-white/75 min-h-screen">
      <Contact />
    </div>
  )
}