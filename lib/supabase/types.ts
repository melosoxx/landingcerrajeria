export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  public: {
    Tables: {
      enrollments: {
        Row: {
          id: string
          user_id: string
          full_name: string
          enrolled_at: string
          completed_at: string | null
          certificate_id: string | null
        }
        Insert: {
          id?: string
          user_id: string
          full_name: string
          enrolled_at?: string
          completed_at?: string | null
          certificate_id?: string | null
        }
        Update: {
          id?: string
          user_id?: string
          full_name?: string
          enrolled_at?: string
          completed_at?: string | null
          certificate_id?: string | null
        }
        Relationships: []
      }
      task_progress: {
        Row: {
          id: string
          user_id: string
          module_id: string
          task_id: string
          task_type: "video" | "pdf" | "quiz"
          completed_at: string
          points_earned: number
        }
        Insert: {
          id?: string
          user_id: string
          module_id: string
          task_id: string
          task_type: "video" | "pdf" | "quiz"
          completed_at?: string
          points_earned?: number
        }
        Update: {
          id?: string
          user_id?: string
          module_id?: string
          task_id?: string
          task_type?: "video" | "pdf" | "quiz"
          completed_at?: string
          points_earned?: number
        }
        Relationships: []
      }
      quiz_attempts: {
        Row: {
          id: string
          user_id: string
          module_id: string
          score: number
          passed: boolean
          attempted_at: string
        }
        Insert: {
          id?: string
          user_id: string
          module_id: string
          score: number
          attempted_at?: string
        }
        Update: {
          id?: string
          user_id?: string
          module_id?: string
          score?: number
          attempted_at?: string
        }
        Relationships: []
      }
    }
    Views: Record<string, never>
    Functions: Record<string, never>
    Enums: Record<string, never>
    CompositeTypes: Record<string, never>
  }
}
