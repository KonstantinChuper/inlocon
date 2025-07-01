'use client'
import React, { useEffect, useState } from 'react'
import { Card, CardContent } from '@/components/ui/card'
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious
} from '@/components/ui/carousel'
import { Button } from '@/components/ui/button'
import { CalendarIcon, ArrowLeft, ArrowRight, ArrowRightIcon } from 'lucide-react'
import Image from 'next/image'

const blogPostsData = [
  {
    id: 1,
    title: 'Öffentliche Ausschreibungen: Ein Leitfaden für Einsteiger',
    category: 'Ratgeber',
    publishDate: '15. Dez 2024',
    description:
      'Erfahren Sie, wie Sie erfolgreich an öffentlichen Ausschreibungen teilnehmen und Ihre Gewinnchancen maximieren.',
    tags: ['Ausschreibungen', 'Ratgeber'],
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=400&h=200&fit=crop'
  },
  {
    id: 2,
    title: 'Die digitale Transformation im Baugewerbe',
    category: 'Trends',
    publishDate: '12. Dez 2024',
    description:
      'Wie digitale Tools und Plattformen die Baubranche revolutionieren und neue Geschäftsmöglichkeiten schaffen.',
    tags: ['Digitalisierung', 'Baugewerbe'],
    image: 'https://images.unsplash.com/photo-1581094794329-c8112a89af12?w=400&h=200&fit=crop'
  },
  {
    id: 3,
    title: 'Erfolgreiche Netzwerkstrategien für B2B-Unternehmen',
    category: 'Business',
    publishDate: '10. Dez 2024',
    description:
      'Praktische Tipps zum Aufbau und zur Pflege von Geschäftskontakten in der digitalen Ära.',
    tags: ['Networking', 'B2B'],
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=400&h=200&fit=crop'
  },
  {
    id: 4,
    title: 'Rechtliche Aspekte bei Vergabeverfahren',
    category: 'Recht',
    publishDate: '8. Dez 2024',
    description:
      'Was Sie über die rechtlichen Rahmenbedingungen bei öffentlichen Vergabeverfahren wissen müssen.',
    tags: ['Recht', 'Vergabe'],
    image: 'https://images.unsplash.com/photo-1589829545856-d10d557cf95f?w=400&h=200&fit=crop'
  }
]

export default function BlogSection() {
  const [api, setApi] = useState<any>(null)
  const [canScrollPrev, setCanScrollPrev] = useState(false)
  const [canScrollNext, setCanScrollNext] = useState(false)
  const [imageError, setImageError] = useState<Record<number, boolean>>({})

  useEffect(() => {
    if (!api) return

    const updateScrollButtons = () => {
      setCanScrollPrev(api.canScrollPrev())
      setCanScrollNext(api.canScrollNext())
    }

    updateScrollButtons()
    api.on('select', updateScrollButtons)
    api.on('reInit', updateScrollButtons)

    return () => {
      api.off('select', updateScrollButtons)
      api.off('reInit', updateScrollButtons)
    }
  }, [api])

  return (
    <section className="max-w-7xl mx-auto px-4 py-10 md:py-20">
      <div className="w-full mt-8">
        <Carousel setApi={setApi} className="w-full">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h2 className="text-2xl md:text-5xl font-extrabold text-primary mb-4">
                Wissen & Insights
              </h2>
              <div className="flex justify-between items-center">
                <p className="font-light text-muted-foreground text-sm md:text-base pt-4">
                  📚 Aktuelle Artikel und Expertenwissen für Ihren Geschäftserfolg
                </p>
              </div>
            </div>
            <div>
              <Button variant={'link'} className="justify-end flex w-full p-0">
                Alle Artikel lesen
              </Button>
              <div className="mt-6 flex items-center justify-end gap-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => api?.scrollPrev()}
                  disabled={!canScrollPrev}
                >
                  <ArrowLeft className="h-4 w-4" />
                </Button>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 rounded-full"
                  onClick={() => api?.scrollNext()}
                  disabled={!canScrollNext}
                >
                  <ArrowRight className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <CarouselContent>
            {blogPostsData.map((post) => (
              <CarouselItem key={post.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="p-0 h-full hover:shadow-lg transition-shadow">
                  <CardContent className="p-0 h-full flex flex-col">
                    <div className="relative w-full h-[200px] flex-shrink-0">
                      {post.image && !imageError[post.id] ? (
                        <img
                          src={post.image}
                          alt={post.title}
                          className="object-cover object-center rounded-t-lg"
                          onError={() => setImageError((prev) => ({ ...prev, [post.id]: true }))}
                        />
                      ) : (
                        <div className="w-full h-full bg-gradient-to-br from-blue-100 to-blue-200 rounded-t-lg flex items-center justify-center">
                          <div className="text-blue-600 text-center">
                            <div className="w-16 h-16 bg-blue-500 rounded-lg flex items-center justify-center mb-2 mx-auto">
                              <span className="text-white text-2xl font-bold">📝</span>
                            </div>
                          </div>
                        </div>
                      )}
                      <div className="absolute top-3 left-3">
                        <span className="bg-primary text-white text-xs px-2 py-1 rounded-full">
                          {post.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-5 flex-1 flex flex-col">
                      <div className="flex items-center gap-4 text-muted-foreground text-sm mb-3">
                        <div className="flex items-center">
                          <CalendarIcon className="mr-1 h-4 w-4" />
                          <span>{post.publishDate}</span>
                        </div>
                      </div>

                      <h3 className="text-lg font-semibold line-clamp-2 mb-3">{post.title}</h3>
                      <p className="text-muted-foreground text-sm line-clamp-3 mb-4 flex-1">
                        {post.description}
                      </p>

                      <div className="flex flex-wrap gap-1 mb-4">
                        {post.tags.map((tag, index) => (
                          <span
                            key={index}
                            className="bg-gray-100 text-gray-600 text-xs px-2 py-1 rounded"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <Button className="w-full text-sm">
                        Artikel lesen
                        <ArrowRightIcon className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>

          <CarouselPrevious className="hidden" />
          <CarouselNext className="hidden" />
        </Carousel>
      </div>
    </section>
  )
}
