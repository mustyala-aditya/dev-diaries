import { create } from 'zustand';
import { Card } from '../types';

interface CardState {
  cards: Card[];
  addCard: (card: Omit<Card, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateCard: (id: string, updates: Partial<Card>) => void;
  deleteCard: (id: string) => void;
  toggleFavorite: (id: string) => void;
  getCardById: (id: string) => Card | undefined;
}

export const useCardStore = create<CardState>((set, get) => ({
  cards: [],
  
  addCard: (cardData) => {
    const newCard: Card = {
      ...cardData,
      id: crypto.randomUUID(),
      createdAt: new Date(),
      updatedAt: new Date(),
    };
    
    set((state) => ({
      cards: [...state.cards, newCard],
    }));
  },
  
  updateCard: (id, updates) => {
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === id
          ? { ...card, ...updates, updatedAt: new Date() }
          : card
      ),
    }));
  },
  
  deleteCard: (id) => {
    set((state) => ({
      cards: state.cards.filter((card) => card.id !== id),
    }));
  },
  
  toggleFavorite: (id) => {
    set((state) => ({
      cards: state.cards.map((card) =>
        card.id === id
          ? { ...card, favorite: !card.favorite, updatedAt: new Date() }
          : card
      ),
    }));
  },
  
  getCardById: (id) => {
    return get().cards.find((card) => card.id === id);
  },
}));