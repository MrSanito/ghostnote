// filepath: c:\WebTech\ghostnote\app\message\expired\page.js
export default function ExpiredMessagePage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white p-6">
      <div className="bg-gray-800 p-6 rounded-xl shadow-lg max-w-md text-center">
        <h1 className="text-xl font-semibold mb-2">Message Expired</h1>
        <p className="bg-gray-700 p-4 rounded-md">
          The message you were viewing has expired and is no longer available.
        </p>
      </div>
    </div>
  );
}
