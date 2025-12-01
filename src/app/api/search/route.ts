import { NextRequest, NextResponse } from 'next/server'
import ZAI from 'z-ai-web-dev-sdk'

export async function POST(request: NextRequest) {
  try {
    const { query } = await request.json()

    if (!query) {
      return NextResponse.json(
        { error: 'Query parameter is required' },
        { status: 400 }
      )
    }

    const zai = await ZAI.create()
    
    const searchResult = await zai.functions.invoke("web_search", {
      query: query,
      num: 10
    })

    return NextResponse.json({
      success: true,
      results: searchResult,
      query: query
    })

  } catch (error: any) {
    console.error('Search API error:', error)
    return NextResponse.json(
      { 
        error: 'Search failed',
        message: error.message || 'An unknown error occurred'
      },
      { status: 500 }
    )
  }
}

export async function GET() {
  return NextResponse.json(
    { error: 'Method not allowed. Use POST for search requests.' },
    { status: 405 }
  )
}