// RightSidebar.js - Right sidebar showing contacts list
export default function RightSidebar() {
  // Sample contacts data
  const contacts = [
    { name: "sanskar", online: true },
    { name: "Bob", online: true },
    { name: "Dorji", online: false },
    { name: "Prince", online: true },
    { name: "pema", online: false },
    { name: "Tenzin", online: true },
  ];

  return (
    <div className="fixed top-14 right-0 w-64 h-full bg-white p-3 overflow-y-auto">
      
      <h3 className="text-gray-500 font-semibold text-sm mb-3 px-2">Contacts</h3>

      {/* Contact list - reusable contact items */}
      {contacts.map((contact) => (
        <div
          key={contact.name}
          className="flex items-center gap-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer mb-1"
        >
          {/* Avatar with online indicator */}
          <div className="relative">
            <div className="w-9 h-9 rounded-full bg-blue-300 flex items-center justify-center font-bold text-white text-sm">
              {contact.name[0]}
            </div>
            {contact.online && (
              <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
            )}
          </div>
          <span className="text-sm font-medium">{contact.name}</span>
        </div>
      ))}

    </div>
  );
}