import { useState } from "react";
import { Eye, Upload, Palette, Calendar } from "lucide-react";
import styles from "../styles/entrada.module.css";
import Link from "next/link";

export default function login() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [imagePreview, setImagePreview] = useState(null);

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => setImagePreview(reader.result);
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className={styles.conteudo} align="center">
        <div>
          <p className={styles.label}> Label do Input</p>
          <input
            type="text"
            placeholder="Digite aqui"
            className={styles.inputArredondado}
          />
        </div>

        <br />

        <div>
          <p className={styles.label}>Senha</p>
          <div className="relative">
            <input
              type={passwordVisible ? "text" : "password"}
              placeholder="Digite aqui"
              className={styles.inputArredondado}
            />
            <button
              type="button"
              onClick={() => setPasswordVisible(!passwordVisible)}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 text-orange-500"
              tabIndex={-1}
              aria-label={passwordVisible ? "Esconder senha" : "Mostrar senha"}
            >
              <Eye size={20} />
            </button>
          </div>
        </div>

        <br />

        <div>
          <p className={styles.label}>Input upload</p>
          <div className="flex items-center gap-2">
            {imagePreview && (
              <img
                src={imagePreview}
                alt="Preview"
                className="w-10 h-10 rounded-full object-cover"
              />
            )}
            <input
              type="file"
              id="fileInput"
              onChange={handleImageUpload}
              className="hidden"
            />
            <label
              htmlFor="fileInput"
              className="cursor-pointer flex-1 p-2 bg-white rounded-full shadow text-gray-700"
            >
              Escolher arquivo
            </label>
            <Upload className="text-orange-500" />
          </div>
        </div>

        <br />

        <div>
          <p className={styles.label}>Input color</p>
          <div className="flex items-center gap-2">
            <input type="color" className="w-10 h-10 p-0 border-none" />
            <span className="p-2 bg-white rounded-full shadow">
              Alterar cor
            </span>
            <Palette className="text-yellow-500" />
          </div>
        </div>

        <div>
          <p className={styles.label}>Input date</p>
          <label className="text-orange-500 font-semibold">
            Label do input
          </label>
          <div className="relative">
            <input
              type="date"
              className="w-full mt-1 p-2 rounded-full bg-white shadow appearance-none"
            />
            <Calendar className="absolute right-3 top-3 text-gray-400" />
          </div>
        </div>
      </div>
      <div align="center">
        <Link href="/login">
          <button className={styles.button}>Ir para Login</button>
        </Link>
      </div>
    </>
  );
}
