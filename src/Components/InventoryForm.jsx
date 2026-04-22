import { useState } from "react";
import { useDispatch } from "react-redux";
import { addItem } from "../features/inventorySlice";

function InventoryForm() {
  const [name, setName] = useState("");
  const [qty, setQty] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!name || !qty) return;

    dispatch(
      addItem({
        id: Date.now(),
        name,
        qty: Number(qty),
      })
    );

    setName("");
    setQty("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Tambah Barang</h2>

      <input
        type="text"
        placeholder="Nama Barang"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />

      <input
        type="number"
        placeholder="Kuantitas"
        value={qty}
        onChange={(e) => setQty(e.target.value)}
      />

      <button type="submit">Tambah</button>
    </form>
  );
}

export default InventoryForm;