import { useState, useRef } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Upload, Image as ImageIcon, X, Ruler, Sparkles, ArrowRight } from "lucide-react";

interface UploadPageProps {
  onUploadComplete: (imageUrl: string) => void;
  onBack: () => void;
}

export function UploadPage({ onUploadComplete, onBack }: UploadPageProps) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [roomLength, setRoomLength] = useState("");
  const [roomWidth, setRoomWidth] = useState("");
  const [roomHeight, setRoomHeight] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileSelect = (file: File) => {
    if (file && file.type.startsWith("image/")) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const result = e.target?.result as string;
        setSelectedImage(result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleFileInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileSelect(file);
    }
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  const handleContinue = () => {
    if (selectedImage) {
      onUploadComplete(selectedImage);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(null);
    setRoomLength("");
    setRoomWidth("");
    setRoomHeight("");
    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50/30 to-pink-50/30 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-blue-200/20 to-purple-200/20 rounded-full blur-3xl"></div>

      {/* Header */}
      <header className="relative px-6 py-6 flex items-center justify-between max-w-7xl mx-auto">
        <div className="flex items-center gap-3">
          <img src="/LogoDream360.png" alt="Dream360" className="h-16 w-auto object-contain" />
        </div>
        <Button variant="ghost" size="sm" onClick={onBack} className="rounded-full">
          ← Back to Home
        </Button>
      </header>

      {/* Main Content */}
      <div className="relative px-6 pb-12 max-w-7xl mx-auto">
        {!selectedImage ? (
          <div className="max-w-3xl mx-auto">
            {/* Title */}
            <div className="text-center mb-10">
              <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 bg-clip-text text-transparent">
                Create Your Dream Space
              </h1>
              <p className="text-gray-600 text-lg">
                Upload a photo and let AI transform it into an immersive 360° experience
              </p>
            </div>

            {/* Upload Area */}
            <div
              className={`relative border-2 border-dashed rounded-3xl p-16 transition-all duration-300 ${
                isDragging
                  ? "border-purple-400 bg-purple-50/50 scale-[1.02]"
                  : "border-gray-300 bg-white/80 backdrop-blur-sm hover:border-purple-300"
              }`}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
            >
              <div className="text-center">
                <div className="relative inline-block mb-8">
                  <div className="w-28 h-28 bg-gradient-to-br from-purple-500 to-pink-500 rounded-3xl flex items-center justify-center mx-auto shadow-xl">
                    <Upload className="w-14 h-14 text-white" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-400 rounded-full flex items-center justify-center animate-bounce">
                    <Sparkles className="w-4 h-4 text-white" />
                  </div>
                </div>

                <h3 className="text-2xl font-semibold mb-3">
                  Drop your room photo here
                </h3>
                <p className="text-gray-500 mb-8 text-lg">or click the button below</p>

                <Button
                  onClick={() => fileInputRef.current?.click()}
                  size="lg"
                  className="bg-gradient-to-r from-purple-600 to-pink-600 hover:from-purple-700 hover:to-pink-700 text-white border-0 rounded-full px-10 py-6 text-lg shadow-xl hover:shadow-2xl transition-all"
                >
                  <ImageIcon className="w-6 h-6 mr-3" />
                  Browse Files
                </Button>

                <input
                  ref={fileInputRef}
                  type="file"
                  accept="image/*"
                  onChange={handleFileInputChange}
                  className="hidden"
                />

                <p className="text-sm text-gray-400 mt-8">
                  Supports: JPG, PNG, WEBP • Max 10MB
                </p>
              </div>
            </div>

            {/* Example Images */}
            <div className="mt-16">
              <h3 className="text-center font-semibold mb-8 text-gray-700 text-lg">
                ✨ Try with example photos
              </h3>
              <div className="grid grid-cols-3 gap-6">
                <div
                  onClick={() =>
                    setSelectedImage(
                      "https://images.unsplash.com/photo-1676389317353-1d553659ea69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwd2luZG93fGVufDF8fHx8MTc2OTc5MTk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    )
                  }
                  className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src="https://images.unsplash.com/photo-1676389317353-1d553659ea69?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhcGFydG1lbnQlMjBsaXZpbmclMjByb29tJTIwd2luZG93fGVufDF8fHx8MTc2OTc5MTk2M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Modern Living Room"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-medium">Modern Living Room</p>
                  </div>
                </div>
                <div
                  onClick={() =>
                    setSelectedImage(
                      "https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5NzU5NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    )
                  }
                  className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src="https://images.unsplash.com/photo-1593696140826-c58b021acf8b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBtaW5pbWFsaXN0JTIwaW50ZXJpb3J8ZW58MXx8fHwxNzY5NzU5NjAxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Minimalist Interior"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-medium">Minimalist Interior</p>
                  </div>
                </div>
                <div
                  onClick={() =>
                    setSelectedImage(
                      "https://images.unsplash.com/photo-1604578762246-41134e37f9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmRpJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY5NzA3MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    )
                  }
                  className="group relative cursor-pointer overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
                >
                  <img
                    src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmRpJTIwaW50ZXJpb3IlMjBkZXNpZ258ZW58MXx8fHwxNzY5NzA3MTkyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                    alt="Japandi Style"
                    className="w-full h-48 object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end p-4">
                    <p className="text-white font-medium">Japandi Style</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Left Column - Image Preview */}
            <div className="space-y-6">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="text-2xl font-bold text-gray-800">Your Room Photo</h2>
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={handleRemoveImage}
                    className="text-red-500 hover:text-red-600 hover:bg-red-50 rounded-full"
                  >
                    <X className="w-4 h-4 mr-2" />
                    Remove
                  </Button>
                </div>
                <div className="relative bg-white rounded-3xl p-3 shadow-2xl">
                  <img
                    src={selectedImage}
                    alt="Uploaded room"
                    className="w-full h-auto rounded-2xl"
                  />
                  <div className="absolute top-6 left-6 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-medium shadow-lg">
                    ✓ Photo Ready
                  </div>
                </div>
              </div>

              {/* Tips Card */}
              <div className="bg-gradient-to-br from-blue-50 to-cyan-50 border-2 border-blue-200 rounded-3xl p-6 shadow-lg">
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 bg-blue-500 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Sparkles className="w-5 h-5 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-blue-900 mb-3 text-lg">
                      💡 Pro Tips
                    </h4>
                    <ul className="text-sm text-blue-800 space-y-2">
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>Well-lit photos produce better results</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>Capture the full room for best 360° effect</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-blue-500 font-bold">•</span>
                        <span>Accurate dimensions enhance realism</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Column - Room Details */}
            <div className="space-y-6">
              <div>
                <h2 className="text-2xl font-bold text-gray-800 mb-4">Room Details</h2>
                
                {/* Room Dimensions Card */}
                <div className="bg-white rounded-3xl p-8 shadow-2xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-12 h-12 bg-gradient-to-br from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
                      <Ruler className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl text-gray-800">Dimensions</h3>
                      <p className="text-sm text-gray-500">Enter your room measurements</p>
                    </div>
                  </div>

                  <div className="space-y-5">
                    <div className="relative">
                      <Label htmlFor="room-length" className="text-sm font-medium text-gray-700 mb-2 block">
                        Length
                      </Label>
                      <div className="relative">
                        <Input
                          id="room-length"
                          type="number"
                          placeholder="5.0"
                          value={roomLength}
                          onChange={(e) => setRoomLength(e.target.value)}
                          className="rounded-xl h-14 text-lg pl-4 pr-12 border-2 focus:border-purple-400"
                          step="0.1"
                          min="0"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">m</span>
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="room-width" className="text-sm font-medium text-gray-700 mb-2 block">
                        Width
                      </Label>
                      <div className="relative">
                        <Input
                          id="room-width"
                          type="number"
                          placeholder="4.0"
                          value={roomWidth}
                          onChange={(e) => setRoomWidth(e.target.value)}
                          className="rounded-xl h-14 text-lg pl-4 pr-12 border-2 focus:border-purple-400"
                          step="0.1"
                          min="0"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">m</span>
                      </div>
                    </div>

                    <div className="relative">
                      <Label htmlFor="room-height" className="text-sm font-medium text-gray-700 mb-2 block">
                        Height
                      </Label>
                      <div className="relative">
                        <Input
                          id="room-height"
                          type="number"
                          placeholder="3.0"
                          value={roomHeight}
                          onChange={(e) => setRoomHeight(e.target.value)}
                          className="rounded-xl h-14 text-lg pl-4 pr-12 border-2 focus:border-purple-400"
                          step="0.1"
                          min="0"
                        />
                        <span className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 font-medium">m</span>
                      </div>
                    </div>
                  </div>

                  {/* Calculation Display */}
                  {roomLength && roomWidth && roomHeight && (
                    <div className="mt-6 p-5 bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl border-2 border-purple-200">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="text-center">
                          <p className="text-sm text-purple-600 mb-1">Diện tích</p>
                          <p className="text-2xl font-bold text-purple-700">
                            {(parseFloat(roomLength) * parseFloat(roomWidth)).toFixed(1)}
                            <span className="text-sm ml-1">m²</span>
                          </p>
                        </div>
                        <div className="text-center">
                          <p className="text-sm text-pink-600 mb-1">Thể tích</p>
                          <p className="text-2xl font-bold text-pink-700">
                            {(parseFloat(roomLength) * parseFloat(roomWidth) * parseFloat(roomHeight)).toFixed(1)}
                            <span className="text-sm ml-1">m³</span>
                          </p>
                        </div>
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Action Button */}
              <Button
                size="lg"
                onClick={handleContinue}
                className="w-full h-16 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-500 hover:from-purple-700 hover:via-pink-700 hover:to-orange-600 text-white border-0 rounded-2xl text-lg font-semibold shadow-2xl hover:shadow-purple-500/50 transition-all hover:scale-[1.02]"
              >
                Continue to Concept Selection
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>

              {/* Info Text */}
              <p className="text-center text-sm text-gray-500">
                Room dimensions are optional but help create more accurate results
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}