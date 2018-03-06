using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CastleWebService.Models
{
    public partial class castle_devContext : DbContext
    {
        public virtual DbSet<Answers> Answers { get; set; }
        public virtual DbSet<AutoComment> AutoComment { get; set; }
        public virtual DbSet<Inspections> Inspections { get; set; }
        public virtual DbSet<Organizations> Organizations { get; set; }
        public virtual DbSet<Photos> Photos { get; set; }
        public virtual DbSet<Questions> Questions { get; set; }
        public virtual DbSet<Sections> Sections { get; set; }
        public virtual DbSet<Subsections> Subsections { get; set; }
        public virtual DbSet<Themes> Themes { get; set; }
        public virtual DbSet<Users> Users { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
#warning To protect potentially sensitive information in your connection string, you should move it out of source code. See http://go.microsoft.com/fwlink/?LinkId=723263 for guidance on storing connection strings.
                optionsBuilder.UseSqlServer(@"Server=tcp:castle-dev.database.windows.net,1433;Initial Catalog=castle-dev;Persist Security Info=False;User ID=king;Password=b00yeah123!;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Answers>(entity =>
            {
                entity.HasKey(e => e.AnswerId);

                entity.Property(e => e.AnsAutoComment)
                    .HasColumnName("ansAutoComment")
                    .IsUnicode(false);

                entity.Property(e => e.AnsChecked).HasColumnName("ansChecked");

                entity.Property(e => e.AnsInspectionId).HasColumnName("ansInspectionId");

                entity.Property(e => e.AnsOrder).HasColumnName("ansOrder");

                entity.Property(e => e.AnsQuestionId).HasColumnName("ansQuestionId");

                entity.Property(e => e.AnsType)
                    .HasColumnName("ansType")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.AnsValue)
                    .HasColumnName("ansValue")
                    .IsUnicode(false);

                entity.HasOne(d => d.AnsQuestion)
                    .WithMany(p => p.Answers)
                    .HasForeignKey(d => d.AnsQuestionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Answer__ansQuest__5BE2A6F2");
            });

            modelBuilder.Entity<AutoComment>(entity =>
            {
                entity.Property(e => e.AcAutoComment)
                    .HasColumnName("acAutoComment")
                    .IsUnicode(false);

                entity.Property(e => e.AcKey)
                    .HasColumnName("acKey")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.AcUserId).HasColumnName("acUserId");

                entity.HasOne(d => d.AcUser)
                    .WithMany(p => p.AutoComment)
                    .HasForeignKey(d => d.AcUserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_AutoComment_Users");
            });

            modelBuilder.Entity<Inspections>(entity =>
            {
                entity.HasKey(e => e.InspectionId);

                entity.Property(e => e.InspectionId).HasColumnName("inspectionId");

                entity.Property(e => e.InsGuid)
                    .IsRequired()
                    .HasColumnName("insGUID")
                    .IsUnicode(false);

                entity.Property(e => e.InsHash)
                    .HasColumnName("insHash")
                    .IsUnicode(false);

                entity.Property(e => e.InsIsDeleted).HasColumnName("insIsDeleted");

                entity.Property(e => e.InsLastModified)
                    .HasColumnName("insLastModified")
                    .HasDefaultValueSql("(getutcdate())");

                entity.Property(e => e.InsLastSubmitted).HasColumnName("insLastSubmitted");

                entity.Property(e => e.InsName)
                    .HasColumnName("insName")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.InsOrganizationId).HasColumnName("insOrganizationId");

                entity.Property(e => e.InsSourceType)
                    .IsRequired()
                    .HasColumnName("insSourceType")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.InsTemplateId).HasColumnName("insTemplateId");

                entity.Property(e => e.InsTemplateResponseBlob)
                    .HasColumnName("insTemplateResponseBlob")
                    .IsUnicode(false);

                entity.Property(e => e.InsTemplateTitle)
                    .HasColumnName("insTemplateTitle")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.InsThemeId).HasColumnName("insThemeId");

                entity.Property(e => e.InsThemeResponseBlob)
                    .HasColumnName("insThemeResponseBlob")
                    .IsUnicode(false);

                entity.Property(e => e.InsUserId).HasColumnName("insUserId");

                entity.HasOne(d => d.InsUser)
                    .WithMany(p => p.Inspections)
                    .HasForeignKey(d => d.InsUserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Inspections_Users");
            });

            modelBuilder.Entity<Organizations>(entity =>
            {
                entity.HasKey(e => e.OrganizationId);

                entity.Property(e => e.OrgAddress)
                    .HasColumnName("orgAddress")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.OrgCity)
                    .HasColumnName("orgCity")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.OrgIsDeleted).HasColumnName("orgIsDeleted");

                entity.Property(e => e.OrgLastModifed)
                    .HasColumnName("orgLastModifed")
                    .HasDefaultValueSql("(getutcdate())");

                entity.Property(e => e.OrgLogo)
                    .HasColumnName("orgLogo")
                    .IsUnicode(false);

                entity.Property(e => e.OrgName)
                    .HasColumnName("orgName")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.OrgState)
                    .HasColumnName("orgState")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.OrgZipCode)
                    .HasColumnName("orgZipCode")
                    .HasMaxLength(12)
                    .IsUnicode(false);
            });

            modelBuilder.Entity<Photos>(entity =>
            {
                entity.HasKey(e => e.PhotoId);

                entity.Property(e => e.PhoAnswerId).HasColumnName("phoAnswerId");

                entity.Property(e => e.PhoInspectionId).HasColumnName("phoInspectionId");

                entity.Property(e => e.PhoLink)
                    .HasColumnName("phoLink")
                    .IsUnicode(false);

                entity.Property(e => e.PhoOrder).HasColumnName("phoOrder");

                entity.Property(e => e.PhoQuestionId).HasColumnName("phoQuestionId");

                entity.Property(e => e.PhoTitle)
                    .HasColumnName("phoTitle")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.PhoAnswer)
                    .WithMany(p => p.Photos)
                    .HasForeignKey(d => d.PhoAnswerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Photo__phoAnswer__6383C8BA");

                entity.HasOne(d => d.PhoInspection)
                    .WithMany(p => p.Photos)
                    .HasForeignKey(d => d.PhoInspectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Photo__phoInspec__619B8048");

                entity.HasOne(d => d.PhoQuestion)
                    .WithMany(p => p.Photos)
                    .HasForeignKey(d => d.PhoQuestionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Photo__phoQuesti__628FA481");
            });

            modelBuilder.Entity<Questions>(entity =>
            {
                entity.HasKey(e => e.QuestionId);

                entity.Property(e => e.QueAnswered).HasColumnName("queAnswered");

                entity.Property(e => e.QueComments)
                    .HasColumnName("queComments")
                    .IsUnicode(false);

                entity.Property(e => e.QueDescription)
                    .HasColumnName("queDescription")
                    .IsUnicode(false);

                entity.Property(e => e.QueInspectionId).HasColumnName("queInspectionId");

                entity.Property(e => e.QueMax).HasColumnName("queMax");

                entity.Property(e => e.QueMin).HasColumnName("queMin");

                entity.Property(e => e.QueNotApplicable).HasColumnName("queNotApplicable");

                entity.Property(e => e.QueOrder).HasColumnName("queOrder");

                entity.Property(e => e.QuePrivateNotes)
                    .HasColumnName("quePrivateNotes")
                    .IsUnicode(false);

                entity.Property(e => e.QueRequired).HasColumnName("queRequired");

                entity.Property(e => e.QueShowDescription).HasColumnName("queShowDescription");

                entity.Property(e => e.QueShowSummaryRemark).HasColumnName("queShowSummaryRemark");

                entity.Property(e => e.QueSubSectionId).HasColumnName("queSubSectionId");

                entity.Property(e => e.QueTitle)
                    .HasColumnName("queTitle")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.QueType)
                    .HasColumnName("queType")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.Property(e => e.QueValidationType)
                    .HasColumnName("queValidationType")
                    .HasMaxLength(40)
                    .IsUnicode(false);

                entity.HasOne(d => d.QueSubSection)
                    .WithMany(p => p.Questions)
                    .HasForeignKey(d => d.QueSubSectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Questions_Subsections");
            });

            modelBuilder.Entity<Sections>(entity =>
            {
                entity.HasKey(e => e.SectionId);

                entity.Property(e => e.SecInspectionId).HasColumnName("secInspectionId");

                entity.Property(e => e.SecOrder).HasColumnName("secOrder");

                entity.Property(e => e.SecTitle)
                    .HasColumnName("secTitle")
                    .HasMaxLength(200)
                    .IsUnicode(false);

                entity.HasOne(d => d.SecInspection)
                    .WithMany(p => p.Sections)
                    .HasForeignKey(d => d.SecInspectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Section__secInsp__5165187F");
            });

            modelBuilder.Entity<Subsections>(entity =>
            {
                entity.HasKey(e => e.SubsectionId);

                entity.Property(e => e.SusInspectionId).HasColumnName("susInspectionId");

                entity.Property(e => e.SusOrder).HasColumnName("susOrder");

                entity.Property(e => e.SusSectionId).HasColumnName("susSectionId");

                entity.Property(e => e.SusTitle)
                    .HasColumnName("susTitle")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.SusSection)
                    .WithMany(p => p.Subsections)
                    .HasForeignKey(d => d.SusSectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Subsectio__susSe__5441852A");
            });

            modelBuilder.Entity<Themes>(entity =>
            {
                entity.HasKey(e => e.ThemeId);

                entity.Property(e => e.ThemeBlob).HasColumnName("themeBlob");

                entity.Property(e => e.ThemeCreatedDate).HasColumnName("themeCreatedDate");

                entity.Property(e => e.ThemeHash)
                    .IsRequired()
                    .HasColumnName("themeHash")
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.ThemeIsDeleted).HasColumnName("themeIsDeleted");

                entity.Property(e => e.ThemeLastClientModified).HasColumnName("themeLastClientModified");

                entity.Property(e => e.ThemeLastModified)
                    .HasColumnName("themeLastModified")
                    .HasDefaultValueSql("(getutcdate())");

                entity.Property(e => e.ThemeOrganizationId).HasColumnName("themeOrganizationId");

                entity.Property(e => e.ThemeTitle)
                    .HasColumnName("themeTitle")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ThemeUnique)
                    .IsRequired()
                    .HasColumnName("themeUnique")
                    .HasMaxLength(256)
                    .IsUnicode(false);

                entity.Property(e => e.ThemeUserId).HasColumnName("themeUserId");

                entity.Property(e => e.ThemeVersion)
                    .HasColumnName("themeVersion")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.ThemeOrganization)
                    .WithMany(p => p.Themes)
                    .HasForeignKey(d => d.ThemeOrganizationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Theme__themeOrga__6754599E");

                entity.HasOne(d => d.ThemeUser)
                    .WithMany(p => p.Themes)
                    .HasForeignKey(d => d.ThemeUserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Theme__themeUser__66603565");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId);

                entity.Property(e => e.UsrAccountLocked)
                    .HasColumnName("usrAccountLocked")
                    .HasDefaultValueSql("((1))");

                entity.Property(e => e.UsrAddress)
                    .HasColumnName("usrAddress")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UsrCity)
                    .HasColumnName("usrCity")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UsrEmail)
                    .HasColumnName("usrEmail")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.UsrFirstName)
                    .HasColumnName("usrFirstName")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UsrIsDeleted).HasColumnName("usrIsDeleted");

                entity.Property(e => e.UsrLastModified)
                    .HasColumnName("usrLastModified")
                    .HasDefaultValueSql("(getutcdate())");

                entity.Property(e => e.UsrLastName)
                    .HasColumnName("usrLastName")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UsrOrganizationId).HasColumnName("usrOrganizationId");

                entity.Property(e => e.UsrPassword)
                    .IsRequired()
                    .HasColumnName("usrPassword")
                    .HasMaxLength(64)
                    .IsUnicode(false);

                entity.Property(e => e.UsrPhone)
                    .HasColumnName("usrPhone")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.UsrState)
                    .HasColumnName("usrState")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UsrUsername)
                    .IsRequired()
                    .HasColumnName("usrUsername")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UsrZip)
                    .HasColumnName("usrZip")
                    .HasMaxLength(50)
                    .IsUnicode(false);
            });
        }
    }
}
