import { useState } from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { Panorama360 } from "./Panorama360";

interface ViewerPageProps {
  uploadedImage: string;
  onBack: () => void;
}

interface Concept {
  id: string;
  name: string;
  image: string;
}

const concepts: Concept[] = [
  {
    id: "minimalist",
    name: "Minimalist",
    image:
      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5NzU5NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "japandi",
    name: "Japandi",
    image:
      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmRpJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY5NzA3MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
  {
    id: "cyberpunk",
    name: "Cyberpunk",
    image:
      "https://images.unsplash.com/photo-1593542091381-8579f854507e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBuZW9uJTIwcm9vbXxlbnwxfHx8fDE3Njk3OTE5NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
  },
];

export function ViewerPage({ uploadedImage, onBack }: ViewerPageProps) {
  const [selectedConcept, setSelectedConcept] = useState<string>("japandi");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
      {/* Header */}
      <header className="absolute top-0 left-0 right-0 z-20 px-6 py-4 flex items-center justify-between">
        <Button
          variant="ghost"
          size="sm"
          onClick={onBack}
          className="bg-black/50 backdrop-blur-md text-white hover:bg-black/70 rounded-full"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back
        </Button>

        <div className="flex items-center gap-2 bg-red-500/90 backdrop-blur-md px-4 py-2 rounded-full">
          <div className="w-2 h-2 bg-white rounded-full animate-pulse" />
          <span className="text-white text-sm font-medium">360° ACTIVE</span>
        </div>
      </header>

      {/* Main 360 Viewer – cùng thư viện như Hero */}
      <div className="relative w-full" style={{ height: "100vh" }}>
        <Panorama360
          src={uploadedImage}
          height="100%"
          hideNavbar={true}
          mousewheel={true}
          className="absolute inset-0"
        />
      </div>

      {/* Concept Selector - Bottom */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20">
        <div className="bg-black/70 backdrop-blur-xl rounded-3xl p-4 shadow-2xl">
          <div className="flex items-center gap-4">
            {concepts.map((concept) => (
              <button
                key={concept.id}
                onClick={() => setSelectedConcept(concept.id)}
                className={`relative group transition-all ${
                  selectedConcept === concept.id
                    ? "scale-110"
                    : "scale-100 opacity-70 hover:opacity-100"
                }`}
              >
                <div
                  className={`w-24 h-24 rounded-2xl overflow-hidden border-3 transition-all ${
                    selectedConcept === concept.id
                      ? "border-pink-500 shadow-lg shadow-pink-500/50"
                      : "border-transparent"
                  }`}
                >
                  <img
                    src={concept.image}
                    alt={concept.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div
                  className={`absolute -bottom-8 left-1/2 -translate-x-1/2 whitespace-nowrap text-sm font-medium transition-colors ${
                    selectedConcept === concept.id
                      ? "text-pink-400"
                      : "text-white"
                  }`}
                >
                  {concept.name}
                </div>
                {selectedConcept === concept.id && (
                  <div className="absolute -top-2 -right-2 w-6 h-6 bg-pink-500 rounded-full flex items-center justify-center">
                    <svg
                      className="w-4 h-4 text-white"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                    >
                      <path
                        fillRule="evenodd"
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </div>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
