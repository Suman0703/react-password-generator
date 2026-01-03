# 🔐 Password Generator (React + Hooks)

A modern **Password Generator** built using **React** and **Tailwind CSS**.  
This project demonstrates the practical usage of **React Hooks** such as  
`useState`, `useEffect`, `useCallback`, and `useRef`.

---

## ✨ Features

- 🔢 Generate random passwords
- 📏 Adjustable password length (6–100)
- 🔠 Option to include numbers
- 🔣 Option to include special characters
- 📋 Copy password to clipboard
- ✅ Copy button changes to **“Copied”** after copying
- 🎨 Clean & responsive UI (Tailwind CSS)

---

## 🧠 React Hooks Used

### 1️⃣ `useState`
Used to manage:
- Password length
- Include numbers toggle
- Include characters toggle
- Generated password
- Copy button state (Copy / Copied)

```js
const [length, setlength] = useState(8)
const [number, setnumber] = useState(false)
const [char, setchar] = useState(true)
const [password, setpassword] = useState("")
const [copied, setCopied] = useState(false)
