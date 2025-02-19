
import type { DefineComponent, SlotsType } from 'vue'
type IslandComponent<T extends DefineComponent> = T & DefineComponent<{}, {refresh: () => Promise<void>}, {}, {}, {}, {}, {}, {}, {}, {}, {}, {}, SlotsType<{ fallback: { error: unknown } }>>
interface _GlobalComponents {
      'AdminDashboard': typeof import("../components/admin/Dashboard.vue")['default']
    'AdminFooter': typeof import("../components/admin/Footer.vue")['default']
    'AdminNavbar': typeof import("../components/admin/Navbar.vue")['default']
    'AdminSidebar': typeof import("../components/admin/Sidebar.vue")['default']
    'AuthLoginForm': typeof import("../components/auth/LoginForm.vue")['default']
    'AuthRegisterForm': typeof import("../components/auth/RegisterForm.vue")['default']
    'BlogBlog1': typeof import("../components/blog/Blog1.vue")['default']
    'BlogBlog2': typeof import("../components/blog/Blog2.vue")['default']
    'BlogBlog3': typeof import("../components/blog/Blog3.vue")['default']
    'Booking': typeof import("../components/booking/Booking.vue")['default']
    'BookingViewBooking': typeof import("../components/booking/ViewBooking.vue")['default']
    'PackageEngagement': typeof import("../components/package/Engagement.vue")['default']
    'PackageEvent': typeof import("../components/package/Event.vue")['default']
    'PackagePaketTab': typeof import("../components/package/PaketTab.vue")['default']
    'PackageWedding': typeof import("../components/package/Wedding.vue")['default']
    'ProfileAbout': typeof import("../components/profile/About.vue")['default']
    'ProfileBlog': typeof import("../components/profile/Blog.vue")['default']
    'ProfileContact': typeof import("../components/profile/Contact.vue")['default']
    'ProfileGalleryFull': typeof import("../components/profile/GalleryFull.vue")['default']
    'ProfileOurteam': typeof import("../components/profile/Ourteam.vue")['default']
    'ProfilePackage': typeof import("../components/profile/Package.vue")['default']
    'ProfilePortofolio': typeof import("../components/profile/Portofolio.vue")['default']
    'ProfileTestimoni': typeof import("../components/profile/Testimoni.vue")['default']
    'ProfileVendor': typeof import("../components/profile/Vendor.vue")['default']
    'SharedBook': typeof import("../components/shared/Book.vue")['default']
    'SharedCarousel': typeof import("../components/shared/Carousel.vue")['default']
    'SharedEngEvent': typeof import("../components/shared/EngEvent.vue")['default']
    'SharedFooter': typeof import("../components/shared/Footer.vue")['default']
    'SharedGallery': typeof import("../components/shared/Gallery.vue")['default']
    'SharedGoals': typeof import("../components/shared/Goals.vue")['default']
    'SharedHeaderLanding': typeof import("../components/shared/HeaderLanding.vue")['default']
    'SharedHeaderMain': typeof import("../components/shared/HeaderMain.vue")['default']
    'SharedServices': typeof import("../components/shared/Services.vue")['default']
    'SharedWeddingEvent': typeof import("../components/shared/WeddingEvent.vue")['default']
    'NuxtWelcome': typeof import("../../../../../node_modules/nuxt/dist/app/components/welcome")['default']
    'NuxtLayout': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'NuxtErrorBoundary': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'ClientOnly': typeof import("../../../../../node_modules/nuxt/dist/app/components/client-only")['default']
    'DevOnly': typeof import("../../../../../node_modules/nuxt/dist/app/components/dev-only")['default']
    'ServerPlaceholder': typeof import("../../../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'NuxtLink': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'NuxtLoadingIndicator': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'NuxtRouteAnnouncer': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'NuxtImg': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'NuxtPicture': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'NuxtPage': typeof import("../../../../../node_modules/nuxt/dist/pages/runtime/page")['default']
    'NoScript': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'Link': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Link']
    'Base': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Base']
    'Title': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Title']
    'Meta': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'Style': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Style']
    'Head': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Head']
    'Html': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Html']
    'Body': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Body']
    'NuxtIsland': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'NuxtRouteAnnouncer': IslandComponent<typeof import("../../../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
      'LazyAdminDashboard': typeof import("../components/admin/Dashboard.vue")['default']
    'LazyAdminFooter': typeof import("../components/admin/Footer.vue")['default']
    'LazyAdminNavbar': typeof import("../components/admin/Navbar.vue")['default']
    'LazyAdminSidebar': typeof import("../components/admin/Sidebar.vue")['default']
    'LazyAuthLoginForm': typeof import("../components/auth/LoginForm.vue")['default']
    'LazyAuthRegisterForm': typeof import("../components/auth/RegisterForm.vue")['default']
    'LazyBlogBlog1': typeof import("../components/blog/Blog1.vue")['default']
    'LazyBlogBlog2': typeof import("../components/blog/Blog2.vue")['default']
    'LazyBlogBlog3': typeof import("../components/blog/Blog3.vue")['default']
    'LazyBooking': typeof import("../components/booking/Booking.vue")['default']
    'LazyBookingViewBooking': typeof import("../components/booking/ViewBooking.vue")['default']
    'LazyPackageEngagement': typeof import("../components/package/Engagement.vue")['default']
    'LazyPackageEvent': typeof import("../components/package/Event.vue")['default']
    'LazyPackagePaketTab': typeof import("../components/package/PaketTab.vue")['default']
    'LazyPackageWedding': typeof import("../components/package/Wedding.vue")['default']
    'LazyProfileAbout': typeof import("../components/profile/About.vue")['default']
    'LazyProfileBlog': typeof import("../components/profile/Blog.vue")['default']
    'LazyProfileContact': typeof import("../components/profile/Contact.vue")['default']
    'LazyProfileGalleryFull': typeof import("../components/profile/GalleryFull.vue")['default']
    'LazyProfileOurteam': typeof import("../components/profile/Ourteam.vue")['default']
    'LazyProfilePackage': typeof import("../components/profile/Package.vue")['default']
    'LazyProfilePortofolio': typeof import("../components/profile/Portofolio.vue")['default']
    'LazyProfileTestimoni': typeof import("../components/profile/Testimoni.vue")['default']
    'LazyProfileVendor': typeof import("../components/profile/Vendor.vue")['default']
    'LazySharedBook': typeof import("../components/shared/Book.vue")['default']
    'LazySharedCarousel': typeof import("../components/shared/Carousel.vue")['default']
    'LazySharedEngEvent': typeof import("../components/shared/EngEvent.vue")['default']
    'LazySharedFooter': typeof import("../components/shared/Footer.vue")['default']
    'LazySharedGallery': typeof import("../components/shared/Gallery.vue")['default']
    'LazySharedGoals': typeof import("../components/shared/Goals.vue")['default']
    'LazySharedHeaderLanding': typeof import("../components/shared/HeaderLanding.vue")['default']
    'LazySharedHeaderMain': typeof import("../components/shared/HeaderMain.vue")['default']
    'LazySharedServices': typeof import("../components/shared/Services.vue")['default']
    'LazySharedWeddingEvent': typeof import("../components/shared/WeddingEvent.vue")['default']
    'LazyNuxtWelcome': typeof import("../../../../../node_modules/nuxt/dist/app/components/welcome")['default']
    'LazyNuxtLayout': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
    'LazyNuxtErrorBoundary': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
    'LazyClientOnly': typeof import("../../../../../node_modules/nuxt/dist/app/components/client-only")['default']
    'LazyDevOnly': typeof import("../../../../../node_modules/nuxt/dist/app/components/dev-only")['default']
    'LazyServerPlaceholder': typeof import("../../../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
    'LazyNuxtLink': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
    'LazyNuxtLoadingIndicator': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
    'LazyNuxtRouteAnnouncer': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
    'LazyNuxtImg': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
    'LazyNuxtPicture': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
    'LazyNuxtPage': typeof import("../../../../../node_modules/nuxt/dist/pages/runtime/page")['default']
    'LazyNoScript': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
    'LazyLink': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Link']
    'LazyBase': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Base']
    'LazyTitle': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Title']
    'LazyMeta': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Meta']
    'LazyStyle': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Style']
    'LazyHead': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Head']
    'LazyHtml': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Html']
    'LazyBody': typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Body']
    'LazyNuxtIsland': typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
    'LazyNuxtRouteAnnouncer': IslandComponent<typeof import("../../../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
}

declare module '@vue/runtime-core' {
  export interface GlobalComponents extends _GlobalComponents { }
}

declare module '@vue/runtime-dom' {
  export interface GlobalComponents extends _GlobalComponents { }
}

declare module 'vue' {
  export interface GlobalComponents extends _GlobalComponents { }
}

export const AdminDashboard: typeof import("../components/admin/Dashboard.vue")['default']
export const AdminFooter: typeof import("../components/admin/Footer.vue")['default']
export const AdminNavbar: typeof import("../components/admin/Navbar.vue")['default']
export const AdminSidebar: typeof import("../components/admin/Sidebar.vue")['default']
export const AuthLoginForm: typeof import("../components/auth/LoginForm.vue")['default']
export const AuthRegisterForm: typeof import("../components/auth/RegisterForm.vue")['default']
export const BlogBlog1: typeof import("../components/blog/Blog1.vue")['default']
export const BlogBlog2: typeof import("../components/blog/Blog2.vue")['default']
export const BlogBlog3: typeof import("../components/blog/Blog3.vue")['default']
export const Booking: typeof import("../components/booking/Booking.vue")['default']
export const BookingViewBooking: typeof import("../components/booking/ViewBooking.vue")['default']
export const PackageEngagement: typeof import("../components/package/Engagement.vue")['default']
export const PackageEvent: typeof import("../components/package/Event.vue")['default']
export const PackagePaketTab: typeof import("../components/package/PaketTab.vue")['default']
export const PackageWedding: typeof import("../components/package/Wedding.vue")['default']
export const ProfileAbout: typeof import("../components/profile/About.vue")['default']
export const ProfileBlog: typeof import("../components/profile/Blog.vue")['default']
export const ProfileContact: typeof import("../components/profile/Contact.vue")['default']
export const ProfileGalleryFull: typeof import("../components/profile/GalleryFull.vue")['default']
export const ProfileOurteam: typeof import("../components/profile/Ourteam.vue")['default']
export const ProfilePackage: typeof import("../components/profile/Package.vue")['default']
export const ProfilePortofolio: typeof import("../components/profile/Portofolio.vue")['default']
export const ProfileTestimoni: typeof import("../components/profile/Testimoni.vue")['default']
export const ProfileVendor: typeof import("../components/profile/Vendor.vue")['default']
export const SharedBook: typeof import("../components/shared/Book.vue")['default']
export const SharedCarousel: typeof import("../components/shared/Carousel.vue")['default']
export const SharedEngEvent: typeof import("../components/shared/EngEvent.vue")['default']
export const SharedFooter: typeof import("../components/shared/Footer.vue")['default']
export const SharedGallery: typeof import("../components/shared/Gallery.vue")['default']
export const SharedGoals: typeof import("../components/shared/Goals.vue")['default']
export const SharedHeaderLanding: typeof import("../components/shared/HeaderLanding.vue")['default']
export const SharedHeaderMain: typeof import("../components/shared/HeaderMain.vue")['default']
export const SharedServices: typeof import("../components/shared/Services.vue")['default']
export const SharedWeddingEvent: typeof import("../components/shared/WeddingEvent.vue")['default']
export const NuxtWelcome: typeof import("../../../../../node_modules/nuxt/dist/app/components/welcome")['default']
export const NuxtLayout: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const NuxtErrorBoundary: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const ClientOnly: typeof import("../../../../../node_modules/nuxt/dist/app/components/client-only")['default']
export const DevOnly: typeof import("../../../../../node_modules/nuxt/dist/app/components/dev-only")['default']
export const ServerPlaceholder: typeof import("../../../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const NuxtLink: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const NuxtLoadingIndicator: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const NuxtRouteAnnouncer: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const NuxtImg: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const NuxtPicture: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const NuxtPage: typeof import("../../../../../node_modules/nuxt/dist/pages/runtime/page")['default']
export const NoScript: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const Link: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Link']
export const Base: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Base']
export const Title: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Title']
export const Meta: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const Style: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Style']
export const Head: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Head']
export const Html: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Html']
export const Body: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Body']
export const NuxtIsland: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const NuxtRouteAnnouncer: IslandComponent<typeof import("../../../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>
export const LazyAdminDashboard: typeof import("../components/admin/Dashboard.vue")['default']
export const LazyAdminFooter: typeof import("../components/admin/Footer.vue")['default']
export const LazyAdminNavbar: typeof import("../components/admin/Navbar.vue")['default']
export const LazyAdminSidebar: typeof import("../components/admin/Sidebar.vue")['default']
export const LazyAuthLoginForm: typeof import("../components/auth/LoginForm.vue")['default']
export const LazyAuthRegisterForm: typeof import("../components/auth/RegisterForm.vue")['default']
export const LazyBlogBlog1: typeof import("../components/blog/Blog1.vue")['default']
export const LazyBlogBlog2: typeof import("../components/blog/Blog2.vue")['default']
export const LazyBlogBlog3: typeof import("../components/blog/Blog3.vue")['default']
export const LazyBooking: typeof import("../components/booking/Booking.vue")['default']
export const LazyBookingViewBooking: typeof import("../components/booking/ViewBooking.vue")['default']
export const LazyPackageEngagement: typeof import("../components/package/Engagement.vue")['default']
export const LazyPackageEvent: typeof import("../components/package/Event.vue")['default']
export const LazyPackagePaketTab: typeof import("../components/package/PaketTab.vue")['default']
export const LazyPackageWedding: typeof import("../components/package/Wedding.vue")['default']
export const LazyProfileAbout: typeof import("../components/profile/About.vue")['default']
export const LazyProfileBlog: typeof import("../components/profile/Blog.vue")['default']
export const LazyProfileContact: typeof import("../components/profile/Contact.vue")['default']
export const LazyProfileGalleryFull: typeof import("../components/profile/GalleryFull.vue")['default']
export const LazyProfileOurteam: typeof import("../components/profile/Ourteam.vue")['default']
export const LazyProfilePackage: typeof import("../components/profile/Package.vue")['default']
export const LazyProfilePortofolio: typeof import("../components/profile/Portofolio.vue")['default']
export const LazyProfileTestimoni: typeof import("../components/profile/Testimoni.vue")['default']
export const LazyProfileVendor: typeof import("../components/profile/Vendor.vue")['default']
export const LazySharedBook: typeof import("../components/shared/Book.vue")['default']
export const LazySharedCarousel: typeof import("../components/shared/Carousel.vue")['default']
export const LazySharedEngEvent: typeof import("../components/shared/EngEvent.vue")['default']
export const LazySharedFooter: typeof import("../components/shared/Footer.vue")['default']
export const LazySharedGallery: typeof import("../components/shared/Gallery.vue")['default']
export const LazySharedGoals: typeof import("../components/shared/Goals.vue")['default']
export const LazySharedHeaderLanding: typeof import("../components/shared/HeaderLanding.vue")['default']
export const LazySharedHeaderMain: typeof import("../components/shared/HeaderMain.vue")['default']
export const LazySharedServices: typeof import("../components/shared/Services.vue")['default']
export const LazySharedWeddingEvent: typeof import("../components/shared/WeddingEvent.vue")['default']
export const LazyNuxtWelcome: typeof import("../../../../../node_modules/nuxt/dist/app/components/welcome")['default']
export const LazyNuxtLayout: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-layout")['default']
export const LazyNuxtErrorBoundary: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-error-boundary")['default']
export const LazyClientOnly: typeof import("../../../../../node_modules/nuxt/dist/app/components/client-only")['default']
export const LazyDevOnly: typeof import("../../../../../node_modules/nuxt/dist/app/components/dev-only")['default']
export const LazyServerPlaceholder: typeof import("../../../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']
export const LazyNuxtLink: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-link")['default']
export const LazyNuxtLoadingIndicator: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-loading-indicator")['default']
export const LazyNuxtRouteAnnouncer: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-route-announcer")['default']
export const LazyNuxtImg: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtImg']
export const LazyNuxtPicture: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-stubs")['NuxtPicture']
export const LazyNuxtPage: typeof import("../../../../../node_modules/nuxt/dist/pages/runtime/page")['default']
export const LazyNoScript: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['NoScript']
export const LazyLink: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Link']
export const LazyBase: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Base']
export const LazyTitle: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Title']
export const LazyMeta: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Meta']
export const LazyStyle: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Style']
export const LazyHead: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Head']
export const LazyHtml: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Html']
export const LazyBody: typeof import("../../../../../node_modules/nuxt/dist/head/runtime/components")['Body']
export const LazyNuxtIsland: typeof import("../../../../../node_modules/nuxt/dist/app/components/nuxt-island")['default']
export const LazyNuxtRouteAnnouncer: IslandComponent<typeof import("../../../../../node_modules/nuxt/dist/app/components/server-placeholder")['default']>

export const componentNames: string[]
