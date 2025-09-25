interface Vehicle {
  id: number;
  brand: string;
  model: string;
  type: string;
  speed: number;
}

const vehicles: Vehicle[] = [
  { id: 1, brand: "Honda", model: "Wave Alpha", type: "Xe máy", speed: 80 },
  { id: 2, brand: "Toyota", model: "Camry", type: "Ô tô", speed: 180 },
  { id: 3, brand: "Yamaha", model: "Exciter", type: "Xe máy", speed: 120 },
  { id: 4, brand: "Boeing", model: "747", type: "Máy bay", speed: 900 },
  { id: 5, brand: "Giant", model: "ATX", type: "Xe đạp", speed: 25 },
];

function filterByType(list: Vehicle[], type: string): Vehicle[] {
  return list.filter((v) => v.type === type);
}

function findSpeedRange(list: Vehicle[]): {
  slowest: Vehicle;
  fastest: Vehicle;
} {
  let slowest = list[0];
  let fastest = list[0];

  list.forEach((v) => {
    if (v.speed < slowest.speed) slowest = v;
    if (v.speed > fastest.speed) fastest = v;
  });

  return { slowest, fastest };
}

// --- Demo ---
console.log("Danh sách Ô tô:", filterByType(vehicles, "Ô tô"));
console.log("Phương tiện nhanh/chậm nhất:", findSpeedRange(vehicles));
