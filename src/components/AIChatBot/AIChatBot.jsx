import { useState } from 'react'
import styles from './AIChatBot.module.css'

const API_URL = 'http://localhost:3000/api/chat'

const AIChatBot = () => {
  const [messages, setMessages] = useState([])
  const [inputMessage, setInputMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [isMinimized, setIsMinimized] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    if (!inputMessage.trim()) return

    const userMessage = {
      text: inputMessage,
      isUser: true,
      timestamp: new Date().toISOString()
    }
    
    setMessages(prev => [...prev, userMessage])
    setInputMessage('')
    setIsLoading(true)

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ message: inputMessage }),
      })

      const data = await response.json()

      if (data.success) {
        const botResponse = {
          text: data.message,
          isUser: false,
          timestamp: new Date().toISOString()
        }
        setMessages(prev => [...prev, botResponse])
      } else {
        throw new Error(data.message)
      }
    } catch (error) {
      console.error('Error al enviar mensaje:', error)
      const errorResponse = {
        text: "Lo siento, ha ocurrido un error. Por favor, intenta de nuevo.",
        isUser: false,
        timestamp: new Date().toISOString()
      }
      setMessages(prev => [...prev, errorResponse])
    } finally {
      setIsLoading(false)
    }
  }

  const toggleMinimize = () => {
    setIsMinimized(!isMinimized)
  }

  return (
    <div className={`${styles.chatContainer} ${isMinimized ? styles.minimized : ''}`}>
      <div className={styles.chatHeader}>
        <h3 className={styles.chatTitle}>Chat con IA</h3>
        <button 
          className={styles.minimizeButton}
          onClick={toggleMinimize}
          aria-label={isMinimized ? "Maximizar chat" : "Minimizar chat"}
        >
          {isMinimized ? '+' : '-'}
        </button>
      </div>
      
      <div className={styles.chatContent}>
        <div className={styles.messagesContainer}>
          {messages.map((message, index) => (
            <div 
              key={index} 
              className={`${styles.message} ${message.isUser ? styles.userMessage : styles.botMessage}`}
            >
              {message.text}
            </div>
          ))}
          {isLoading && (
            <div className={styles.loadingIndicator}>
              Escribiendo...
            </div>
          )}
        </div>
        <form onSubmit={handleSubmit} className={styles.inputForm}>
          <input
            type="text"
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Escribe tu mensaje aquí..."
            className={styles.input}
          />
          <button type="submit" className={styles.sendButton}>
            Enviar
          </button>
        </form>
      </div>
    </div>
  )
}

export default AIChatBot 