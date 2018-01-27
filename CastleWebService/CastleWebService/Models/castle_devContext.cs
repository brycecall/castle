using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace CastleWebService.Models
{
    public partial class castle_devContext : DbContext
    {
        public virtual DbSet<Answer> Answer { get; set; }
        public virtual DbSet<Founders> Founders { get; set; }
        public virtual DbSet<Inspection> Inspection { get; set; }
        public virtual DbSet<Organization> Organization { get; set; }
        public virtual DbSet<Photo> Photo { get; set; }
        public virtual DbSet<Question> Question { get; set; }
        public virtual DbSet<Section> Section { get; set; }
        public virtual DbSet<Subsection> Subsection { get; set; }
        public virtual DbSet<Theme> Theme { get; set; }
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
            modelBuilder.Entity<Answer>(entity =>
            {
                entity.Property(e => e.AnswerId).ValueGeneratedNever();

                entity.Property(e => e.AndInspectionId).HasColumnName("andInspectionId");

                entity.Property(e => e.AnsAutoComment)
                    .HasColumnName("ansAutoComment")
                    .IsUnicode(false);

                entity.Property(e => e.AnsChecked).HasColumnName("ansChecked");

                entity.Property(e => e.AnsOrder).HasColumnName("ansOrder");

                entity.Property(e => e.AnsQuestionId).HasColumnName("ansQuestionId");

                entity.Property(e => e.AnsSourceType)
                    .IsRequired()
                    .HasColumnName("ansSourceType")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.AnsType)
                    .HasColumnName("ansType")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.AnsValue)
                    .HasColumnName("ansValue")
                    .IsUnicode(false);

                entity.HasOne(d => d.AndInspection)
                    .WithMany(p => p.Answer)
                    .HasForeignKey(d => d.AndInspectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Answer__andInspe__5CD6CB2B");

                entity.HasOne(d => d.AnsQuestion)
                    .WithMany(p => p.Answer)
                    .HasForeignKey(d => d.AnsQuestionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Answer__ansQuest__5BE2A6F2");
            });

            modelBuilder.Entity<Founders>(entity =>
            {
                entity.Property(e => e.FoundersId).ValueGeneratedNever();

                entity.Property(e => e.FoKey)
                    .HasColumnName("foKey")
                    .IsUnicode(false);

                entity.Property(e => e.FoUsersId).HasColumnName("foUsersId");

                entity.HasOne(d => d.FoUsers)
                    .WithMany(p => p.Founders)
                    .HasForeignKey(d => d.FoUsersId)
                    .HasConstraintName("FK__Founders__foUser__6A30C649");
            });

            modelBuilder.Entity<Inspection>(entity =>
            {
                entity.Property(e => e.InspectionId).ValueGeneratedNever();

                entity.Property(e => e.InsIsDeleted).HasColumnName("insIsDeleted");

                entity.Property(e => e.InsLastModified)
                    .HasColumnName("insLastModified")
                    .HasColumnType("date")
                    .HasDefaultValueSql("(getutcdate())");

                entity.Property(e => e.InsLastSubmitted)
                    .HasColumnName("insLastSubmitted")
                    .HasColumnType("date");

                entity.Property(e => e.InsName)
                    .IsRequired()
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.InsSourceType)
                    .IsRequired()
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.InsTemplateResponseBlob).IsUnicode(false);

                entity.Property(e => e.InsTemplateTitle)
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.InsThemeResponseBlob).IsUnicode(false);
            });

            modelBuilder.Entity<Organization>(entity =>
            {
                entity.Property(e => e.OrganizationId).ValueGeneratedNever();

                entity.Property(e => e.OrgAddress)
                    .HasColumnName("orgAddress")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.OrgCity)
                    .HasColumnName("orgCity")
                    .HasMaxLength(100)
                    .IsUnicode(false);

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

            modelBuilder.Entity<Photo>(entity =>
            {
                entity.Property(e => e.PhotoId).ValueGeneratedNever();

                entity.Property(e => e.PhoAnswerId).HasColumnName("phoAnswerId");

                entity.Property(e => e.PhoInspectionId).HasColumnName("phoInspectionId");

                entity.Property(e => e.PhoLink)
                    .HasColumnName("phoLink")
                    .IsUnicode(false);

                entity.Property(e => e.PhoOrder).HasColumnName("phoOrder");

                entity.Property(e => e.PhoQuestionId).HasColumnName("phoQuestionId");

                entity.Property(e => e.PhoSourceType)
                    .IsRequired()
                    .HasColumnName("phoSourceType")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.PhoTitle)
                    .HasColumnName("phoTitle")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.PhoAnswer)
                    .WithMany(p => p.Photo)
                    .HasForeignKey(d => d.PhoAnswerId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Photo__phoAnswer__6383C8BA");

                entity.HasOne(d => d.PhoInspection)
                    .WithMany(p => p.Photo)
                    .HasForeignKey(d => d.PhoInspectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Photo__phoInspec__619B8048");

                entity.HasOne(d => d.PhoQuestion)
                    .WithMany(p => p.Photo)
                    .HasForeignKey(d => d.PhoQuestionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Photo__phoQuesti__628FA481");
            });

            modelBuilder.Entity<Question>(entity =>
            {
                entity.Property(e => e.QuestionId).ValueGeneratedNever();

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

                entity.Property(e => e.QueSourceType)
                    .HasColumnName("queSourceType")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.QueSubSectionId).HasColumnName("queSubSectionId");

                entity.Property(e => e.QueTitle)
                    .HasColumnName("queTitle")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.QueType)
                    .HasColumnName("queType")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.Property(e => e.QueValidationType)
                    .HasColumnName("queValidationType")
                    .HasMaxLength(20)
                    .IsUnicode(false);

                entity.HasOne(d => d.QueInspection)
                    .WithMany(p => p.Question)
                    .HasForeignKey(d => d.QueInspectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Question__queIns__59063A47");

                entity.HasOne(d => d.QueSubSection)
                    .WithMany(p => p.Question)
                    .HasForeignKey(d => d.QueSubSectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Question__queSub__5812160E");
            });

            modelBuilder.Entity<Section>(entity =>
            {
                entity.Property(e => e.SectionId).ValueGeneratedNever();

                entity.Property(e => e.SecInspectionId).HasColumnName("secInspectionId");

                entity.Property(e => e.SecOrder).HasColumnName("secOrder");

                entity.Property(e => e.SecSourceType)
                    .HasColumnName("secSourceType")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SecTitle)
                    .HasColumnName("secTitle")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.HasOne(d => d.SecInspection)
                    .WithMany(p => p.Section)
                    .HasForeignKey(d => d.SecInspectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Section__secInsp__5165187F");
            });

            modelBuilder.Entity<Subsection>(entity =>
            {
                entity.Property(e => e.SubsectionId).ValueGeneratedNever();

                entity.Property(e => e.SusInspectionId).HasColumnName("susInspectionId");

                entity.Property(e => e.SusOrder).HasColumnName("susOrder");

                entity.Property(e => e.SusSectionId).HasColumnName("susSectionId");

                entity.Property(e => e.SusSourceType)
                    .HasColumnName("susSourceType")
                    .HasMaxLength(30)
                    .IsUnicode(false);

                entity.Property(e => e.SusTitle)
                    .HasColumnName("susTitle")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.HasOne(d => d.SusInspection)
                    .WithMany(p => p.Subsection)
                    .HasForeignKey(d => d.SusInspectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Subsectio__susIn__5535A963");

                entity.HasOne(d => d.SusSection)
                    .WithMany(p => p.Subsection)
                    .HasForeignKey(d => d.SusSectionId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Subsectio__susSe__5441852A");
            });

            modelBuilder.Entity<Theme>(entity =>
            {
                entity.Property(e => e.ThemeId).ValueGeneratedNever();

                entity.Property(e => e.ThemeBlob)
                    .HasColumnName("themeBlob")
                    .IsUnicode(false);

                entity.Property(e => e.ThemeOrganizationId).HasColumnName("themeOrganizationId");

                entity.Property(e => e.ThemeTitle)
                    .HasColumnName("themeTitle")
                    .HasMaxLength(100)
                    .IsUnicode(false);

                entity.Property(e => e.ThemeUserId).HasColumnName("themeUserId");

                entity.HasOne(d => d.ThemeOrganization)
                    .WithMany(p => p.Theme)
                    .HasForeignKey(d => d.ThemeOrganizationId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Theme__themeOrga__6754599E");

                entity.HasOne(d => d.ThemeUser)
                    .WithMany(p => p.Theme)
                    .HasForeignKey(d => d.ThemeUserId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK__Theme__themeUser__66603565");
            });

            modelBuilder.Entity<Users>(entity =>
            {
                entity.HasKey(e => e.UserId);

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

                entity.Property(e => e.UsrLastName)
                    .HasColumnName("usrLastName")
                    .HasMaxLength(50)
                    .IsUnicode(false);

                entity.Property(e => e.UsrOrganizationId).HasColumnName("usrOrganizationId");

                entity.Property(e => e.UsrPassword)
                    .IsRequired()
                    .HasColumnName("usrPassword")
                    .HasMaxLength(50)
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
