import { useSelector } from "react-redux";

function InventoryList() {
  const items = useSelector((state) => state.inventory.items);

  return (
    <div>
      <h2>Daftar Barang</h2>

      <table border="1">
        <thead>
          <tr>
            <th>Nama Barang</th>
            <th>Kuantitas</th>
          </tr>
        </thead>
        <tbody>
          {items.map((item) => (
            <tr key={item.id}>
              <td>{item.name}</td>
              <td>{item.qty}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default InventoryList;